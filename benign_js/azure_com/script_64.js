/* 元のURL: https://azure.com */
// 外部JS: https://www.microsoft.com/fe/static/feature-evaluator.js
/**
 * Feature Evaluator JavaScript Client
 * Provides functions to retrieve and lookup feature flag variants
 */

(function(window) {
    'use strict';

    // Default API endpoint - can be overridden
    const DEFAULT_API_ENDPOINT = '/fe/api/features/variants';
    const OVERRIDES_PARAM_NAME = 'fe-overrides';
    
    // Cache for storing feature variants
    window.featureVariants = window.featureVariants || {};

    /**
     * Extracts the sessionId from the MUID cookie
     * @returns {string|null} The sessionId value or null if not found
     */
    function getSessionIdFromCookie() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'MUID') {
                return value;
            }
        }
        return null;
    }

    /**
     * Extracts the locale from the current URL using regex
     * Supports formats like:
     * - /en-US/
     * - /fr-FR/
     * - /en-Latn-US/
     * @returns {string|null} The locale or null if not found
     */
    function getLocaleFromUrl() {
        try {
            const path = window.location.pathname;
            const regex = /\/([a-zA-Z]{2}(?:-[a-zA-Z]{4})?-[a-zA-Z]{2})(?=\/|$)/;
            const match = path.match(regex);
            return match ? match[1].toLowerCase() : null;
        } catch (error) {
            console.warn('Error parsing URL for locale:', error);
            return null;
        }
    }

    /**
     * Gets feature variations from the API
     * @param {string} [apiEndpoint] - Custom API endpoint with optional overrides query parameter
     * @param {string[]} [featureNames] - Specific feature names to request (optional)
     * @returns {Promise<Object>} Promise that resolves to the feature variants object
     */
    async function getVariations(apiEndpoint = DEFAULT_API_ENDPOINT, featureNames = null) {
        try {
            const sessionId = getSessionIdFromCookie();
            const locale = getLocaleFromUrl();

            const requestBody = {
                sessionId: sessionId,
                locale: locale
            };

            // Add feature names if provided
            if (featureNames && Array.isArray(featureNames) && featureNames.length > 0) {
                requestBody.featureNames = featureNames;
            }

            // If no custom endpoint provided, check for overrides in current URL
            let finalEndpoint = apiEndpoint;
            const urlParams = new URLSearchParams(window.location.search);
            const overrides = urlParams.get(OVERRIDES_PARAM_NAME);
            if (overrides) {
                const separator = finalEndpoint.includes('?') ? '&' : '?';
                finalEndpoint += `${separator}${OVERRIDES_PARAM_NAME}=${encodeURIComponent(overrides)}`;
            }

            const response = await fetch(finalEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Store the response in the global window object for caching
            window.featureVariants = data;
            
            console.log('Feature variants loaded:', data);
            return data;

        } catch (error) {
            console.error('Error fetching feature variations:', error);
            throw error;
        }
    }

    /**
     * Gets a specific feature variant by feature name from the cached results
     * @param {string} featureName - The name of the feature to lookup
     * @returns {Object|null} The feature object or null if not found
     */
    function getVariantByFeatureName(featureName) {
        if (!featureName) {
            console.warn('Feature name is required');
            return null;
        }

        if (!window.featureVariants || !window.featureVariants.features) {
            console.warn('No feature variants loaded. Call getVariations() first.');
            return null;
        }

        const variants = window.featureVariants.features;
        const feature = variants.find(variant => variant.featureName === featureName);

        if (!feature) {
            console.warn(`Feature '${featureName}' not found in loaded variants`);
            return null;
        }

        return feature;
    }

    /**
     * Gets the enabled status of a feature by name
     * @param {string} featureName - The name of the feature to check
     * @returns {boolean|null} True if enabled, false if disabled, null if not found
     */
    function isFeatureEnabled(featureName) {
        const feature = getVariantByFeatureName(featureName);
        return feature ? feature.isEnabled : false;
    }

    /**
     * Gets the variant configuration of a feature by name
     * @param {string} featureName - The name of the feature
     * @returns {Object|null} The variant configuration or null if not found
     */
    function getFeatureVariant(featureName) {
        const feature = getVariantByFeatureName(featureName);
        return feature ? feature.variant : null;
    }

    /**
     * Parses override query parameters from current URL
     * @returns {Object|null} Parsed overrides object or null if none found
     */
    function getOverridesFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const overrides = urlParams.get(OVERRIDES_PARAM_NAME);

        if (!overrides) {
            return null;
        }

        const parsed = {};
        const overridePairs = overrides.split(',');
        
        for (const pair of overridePairs) {
            const [featureProperty, value] = pair.split(':');
            if (featureProperty && value) {
                const parts = featureProperty.split('.');
                const featureName = parts.slice(0, -1).join('.');
                const property = parts[parts.length - 1];
                
                if (!parsed[featureName]) {
                    parsed[featureName] = {};
                }
                
                parsed[featureName][property] = value;
            }
        }
        
        return Object.keys(parsed).length > 0 ? parsed : null;
    }

    /**
     * Creates an override string from an object
     * @param {Object} overrides - Override object 
     * @returns {string} Override string in API format
     */
    function createOverrideString(overrides) {
        const parts = [];
        
        for (const [featureName, properties] of Object.entries(overrides)) {
            for (const [property, value] of Object.entries(properties)) {
                parts.push(`${featureName}.${property}:${value}`);
            }
        }
        
        return parts.join(',');
    }

    // Expose functions to the global scope
    window.FeatureEvaluator = {
        getVariations: getVariations,
        getVariantByFeatureName: getVariantByFeatureName,
        isFeatureEnabled: isFeatureEnabled,
        getFeatureVariant: getFeatureVariant,
        
        // Utility functions
        getSessionIdFromCookie: getSessionIdFromCookie,
        getLocaleFromUrl: getLocaleFromUrl,
        getOverridesFromUrl: getOverridesFromUrl,
        createOverrideString: createOverrideString
    };

})(window);


