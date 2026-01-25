/* 元のURL: https://appsflyer.com */
// 外部JS: https://www.appsflyer.com/wp-content/plugins/cloudfront-invalidator-enhanced/assets/js/admin-bar.js?ver=1.0.0
function showNotification(type, title, message, details = '') {
    const notification = document.createElement('div');
    notification.className = `cf-notification ${type}`;
    
    const titleEl = document.createElement('div');
    titleEl.className = 'cf-title';
    titleEl.textContent = title;
    
    const messageEl = document.createElement('div');
    messageEl.className = 'cf-message';
    messageEl.textContent = message;
    
    notification.appendChild(titleEl);
    notification.appendChild(messageEl);
    
    if (details) {
        const detailsEl = document.createElement('div');
        detailsEl.className = 'cf-details';
        detailsEl.textContent = details;
        notification.appendChild(detailsEl);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function cfInvalidatePath(path) {
    if (!path) {
        showNotification('error', 'Error', 'No path specified for invalidation');
        return;
    }

    const isAllPages = path === '/*';
    const confirmMessage = isAllPages 
        ? 'Are you sure you want to invalidate ALL pages in CloudFront? This will clear the entire cache.'
        : `Are you sure you want to invalidate "${path}" in CloudFront?`;

    if (!confirm(confirmMessage)) {
        return;
    }

    // Show loading notification
    const loadingNotification = document.createElement('div');
    loadingNotification.className = 'cf-notification info';
    loadingNotification.innerHTML = `
        <div class="cf-title">
            <span class="cf-loading"></span>
            Invalidating CloudFront Cache
        </div>
        <div class="cf-message">
            ${isAllPages ? 'Invalidating all pages...' : `Invalidating path: ${path}`}
        </div>
    `;
    document.body.appendChild(loadingNotification);

    jQuery.ajax({
        url: cfInvalidator.apiUrl,
        method: 'POST',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-WP-Nonce', cfInvalidator.nonce);
        },
        data: JSON.stringify({ paths: [path] }),
        contentType: 'application/json',
        success: function(response) {
            loadingNotification.remove();
            
            const invalidationId = response.data?.Invalidation?.Id;
            const createTime = response.data?.Invalidation?.CreateTime;
            
            showNotification(
                'success',
                'Success',
                isAllPages ? 'All pages have been invalidated in CloudFront' : `Path "${path}" has been invalidated in CloudFront`,
                invalidationId ? `Invalidation ID: ${invalidationId}\nCreated: ${new Date(createTime).toLocaleString()}` : ''
            );
        },
        error: function(xhr) {
            loadingNotification.remove();
            
            let message = 'Failed to invalidate path in CloudFront';
            let details = '';
            
            if (xhr.responseJSON) {
                if (xhr.responseJSON.message) {
                    message = xhr.responseJSON.message;
                }
                if (xhr.responseJSON.data?.status === 500) {
                    details = 'Please check your CloudFront credentials in the plugin settings.';
                }
            }
            
            showNotification('error', 'Error', message, details);
        }
    });
} 

