chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      // With a new rule ...
      chrome.declarativeContent.onPageChanged.addRules([
        {
          // That fires when a page's URL contains a 'g' ...
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              css: ["form[action='http://127.0.0.1:9666/flash/addcrypted2']"],
            })
          ],
          // And shows the extension's page action.
          actions: [ new chrome.declarativeContent.ShowPageAction()/*, new chrome.declarativeContent.RequestContentScript({js: ["aes.js","main.js"]})*/ ]
        }
      ]);
    });
  });
