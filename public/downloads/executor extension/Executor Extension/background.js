chrome.action.onClicked.addListener((tab) => {
  // Execute the loader script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['loader.js']
  });
});

