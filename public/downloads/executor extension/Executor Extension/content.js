console.log('Content script loaded');

const urlParams = new URLSearchParams(window.location.search);
const activateMenu = urlParams.get('activate_menu_extension');

if (activateMenu === 'true') {
  window.addEventListener('load', () => {
    const swalCSS = document.createElement('link');
    swalCSS.rel = 'stylesheet';
    swalCSS.href = chrome.runtime.getURL('lib/sweetalert2.min.css');
    document.head.appendChild(swalCSS);

    const swalScript = document.createElement('script');
    swalScript.src = chrome.runtime.getURL('lib/sweetalert2.min.js');
    swalScript.onload = () => {
      const menuScript = document.createElement('script');
      menuScript.src = chrome.runtime.getURL('menu-script.js');
      document.body.appendChild(menuScript);
    };
    document.head.appendChild(swalScript);
  });
}