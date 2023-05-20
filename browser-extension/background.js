function reddenPage() {
    console.log(JSON.stringify({html: document.documentElement.outerHTML}))
    /* fetch('http://localhost:8000/process_text/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({html: document.documentElement.outerHTML})
    })
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error)); */
    console.log( {"dnis":['12345678'],"entidades":["Juan","DNI"]})
    let dnis = ['12345678', '22345678'];
    let elementos = document.getElementsByTagName('body')[0].getElementsByTagName('*'); 
            
    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        dnis.forEach(dni => {
          if (elemento.innerHTML.includes(dni)) {
            let reemplazo = '*'.repeat(dni.length)
            elemento.innerHTML = elemento.innerHTML.replace(new RegExp(dni, 'g'), reemplazo);
        }
        });
        
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
      });
    }
  });