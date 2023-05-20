function reddenPage() {
    console.log(JSON.stringify({html: document.documentElement.outerHTML}))
    document.body.style.backgroundColor = 'red';
    fetch('http://localhost:8000/process_text/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({html: document.documentElement.outerHTML})
    })
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));
  }
  
  chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
      });
    }
  });