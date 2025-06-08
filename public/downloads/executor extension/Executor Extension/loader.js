(function() {
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (url.includes('cdn.jsdelivr.net/npm/sweetalert2')) {
      console.log('Intercepted SweetAlert2 CDN request, using local version');
      return new Promise((resolve) => {
        const response = {
          text: () => fetch(chrome.runtime.getURL('sweetalert2.min.js')).then(r => r.text()),
          json: () => Promise.resolve({}),
          ok: true,
          status: 200
        };
        resolve(response);
      });
    }
    return originalFetch(url, options);
  };

  // Load the menu script
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('menu-script.js');
  document.body.appendChild(script);
})();
