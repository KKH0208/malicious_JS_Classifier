/* 元のURL: https://grammarly.com */

            function getOptanonGroupsMapping() {
              var cookie = document.cookie.split('; ').find(function(row) { return row.startsWith('OptanonConsent='); });
              if (!cookie) return null;
              
              var optanonValue = decodeURIComponent(cookie.substring('OptanonConsent='.length));
              var groupsMatch = optanonValue.match(/groups=([^&]+)/);
              if (!groupsMatch) return null;
              
              var groupsStr = groupsMatch[1];
              var groups = {};
              groupsStr.split(',').forEach(function(pair) {
                var parts = pair.split(':');
                var category = parts[0];
                var value = parts[1];
                groups[category] = value === '1' ? 'accepted' : 'declined';
              });
              
              return groups;
            }
            
            function getOptanonConsentState(groupId) {
              var groups = getOptanonGroupsMapping();
              if (!groups) return null;
              
              var groupState = groups[groupId];
              if (!groupState) return null;
              
              return groupState === 'accepted';
            }
            
            function isUserInUSRegion() {
              if (!window.airgap.getRegimes) {
                return false;
              }
              
              try {
                var regimes = window.airgap.getRegimes();
                return regimes && regimes.has('USA');
              } catch (error) {
                return false;
              }
            }
            
            function getMigrationStatus() {
              try {
                var stored = localStorage.getItem('transcend_onetrust_migration_status');
                return stored ? JSON.parse(stored) : null;
              } catch (error) {
                return null;
              }
            }
            
            function setMigrationStatus(consentState, migrated) {
              try {
                var status = {
                  migrated: migrated,
                  migratedAt: new Date().toISOString(),
                  oneTrustConsentHash: 'C0004:' + (consentState ? '1' : '0')
                };
                localStorage.setItem('transcend_onetrust_migration_status', JSON.stringify(status));
              } catch (error) {
                // Silent error handling
              }
            }
            
            function shouldMigrate(consentState) {
              var migrationStatus = getMigrationStatus();
              if (!migrationStatus || !migrationStatus.migrated) {
                return true;
              }
              
              var currentHash = 'C0004:' + (consentState ? '1' : '0');
              return migrationStatus.oneTrustConsentHash !== currentHash;
            }
            
            function hasTranscendConsentSet() {
              if (!window.airgap || !window.airgap.getConsent) {
                return false;
              }
              
              try {
                var currentConsent = window.airgap.getConsent();
                if (!currentConsent) {
                  return false;
                }
                
                if (currentConsent.updated) {
                  return true;
                }
                
                return false;
              } catch (error) {
                return false;
              }
            }
            
            function performConsentMigration(trustedEvent) {
              if (!window.airgap || !window.airgap.setConsent) {
                return false;
              }
              
              try {
                if (!isUserInUSRegion()) {
                  document.removeEventListener('click', performConsentMigration);
                  return false;
                }

                // OneTrust OptanonConsent Cookie - C0004 group (Advertising)
                var c0004ConsentState = getOptanonConsentState('C0004');
                if (c0004ConsentState === null) {
                  document.removeEventListener('click', performConsentMigration);
                  return false;
                }
                
                if (!shouldMigrate(c0004ConsentState)) {
                  document.removeEventListener('click', performConsentMigration);
                  return false;
                }
                
                var hasConsentSet = hasTranscendConsentSet();
                if (hasConsentSet) {
                  document.removeEventListener('click', performConsentMigration);
                  return false;
                }
                
                var transcendConsent = {
                  Advertising: c0004ConsentState
                };
                window.airgap.setConsent(trustedEvent, transcendConsent);
                setMigrationStatus(c0004ConsentState, true);
                document.removeEventListener('click', performConsentMigration);
                return true;
              } catch (error) {
                return false;
              }
            }

            document.addEventListener('click', performConsentMigration);
          

