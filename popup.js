(async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.id) {
        return;
    }
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["aes.js", "main.js"]
        });
    } catch (error) {
        console.error("JDecrypter: no se pudo inyectar el script", error);
    }
})();
