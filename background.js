// Background script
chrome.runtime.onInstalled.addListener(() => {
    console.log('Siakad Polinema Enhancer telah diinstal!');
});

// Menambahkan listener
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('siakad.polinema.ac.id/beranda')) {
        chrome.tabs.sendMessage(tabId, { action: 'pageLoaded' });
    }
}); 