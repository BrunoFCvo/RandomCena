document.addEventListener("click", (e) => {
    if(Math.random() < 0.005) {
        e.stopPropagation();
        e.preventDefault();
        
        showCena();
    }
});

function showCena() {
    document.head.innerHTML = `
        <style>
            document, body {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            video {
                min-width: 100%;
                min-height: 100%;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        </style>
    `;
    document.body.innerHTML = `
        <video autoplay loop>
            <source src="${chrome.extension.getURL('cena.mp4')}" type="video/mp4">
        </video>
    `;
}
