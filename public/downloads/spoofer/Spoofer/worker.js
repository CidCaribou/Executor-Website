self.importScripts('context.js');

const state = () => chrome.storage.local.get({
  'enabled': true,
  'csp-1': true,
  'csp-2': true,
  'csp-3': true,
  'csp-4': true,
  'net-rules': true,
}, prefs => {
  const o = {
    enableRulesetIds: [],
    disableRulesetIds: []
  };

  if (prefs.enabled) {
    chrome.action.setIcon({
      path: {
        16: 'icons/16.png',
        32: 'icons/32.png',
        48: 'icons/48.png'
      }
    });
    o[prefs['csp-1'] ? 'enableRulesetIds' : 'disableRulesetIds'].push('csp-1');
    o[prefs['csp-2'] ? 'enableRulesetIds' : 'disableRulesetIds'].push('csp-2');
    o[prefs['csp-3'] ? 'enableRulesetIds' : 'disableRulesetIds'].push('csp-3');
    o[prefs['csp-4'] ? 'enableRulesetIds' : 'disableRulesetIds'].push('csp-4');
    o[prefs['net-rules'] ? 'enableRulesetIds' : 'disableRulesetIds'].push('net-rules');
  } else {
    o.disableRulesetIds = ['csp-1', 'csp-2', 'csp-3', 'csp-4', 'net-rules'];

    chrome.action.setIcon({
      path: {
        16: 'icons/disabled/16.png',
        32: 'icons/disabled/32.png',
        48: 'icons/disabled/48.png'
      }
    });
  }

  chrome.declarativeNetRequest.updateEnabledRulesets(o);
});

state();

chrome.storage.onChanged.addListener(ps => {
  if (ps.enabled || ps['csp-1'] || ps['csp-2'] || ps['csp-3'] || ps['csp-4'] || ps['net-rules']) {
    state();
  }
});

chrome.action.onClicked.addListener(() => chrome.storage.local.get({
  enabled: false
}, prefs => chrome.storage.local.set({
  enabled: !prefs.enabled
})));
