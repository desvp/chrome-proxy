
var Action = {}


Action.setIcon = function(status) {
    status = status || 'success';
    config = {
        'failure': 'icons/icon-error-no-network.png',
        'system': 'icons/icon-bars-1.png',
        'direct': 'icons/icon-disabled.png',
        'auto_detect': 'icons/icon-bars-3.png',
        'pac_script': 'icons/icon-bars-3.png',
        'fixed_servers': 'icons/icon-bars-4.png',
        'success': 'icons/icon-bars-4.png',
    }
    icon = config[status];
    icon = icon || 'icons/icon-error.png';
    return chrome.browserAction.setIcon({
        path: icon
    }, function() {
        return chrome.runtime.lastError;
    });
};


