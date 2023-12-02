function modalPopup() {
    const openPopup = document.getElementById('openPopup')
    const headerPopup = document.getElementById('headerPopup')
    const videoClose = document.getElementById('videoClose')
    const videoIframe = document.getElementById('videoIframe')

    openPopup.addEventListener('click', function () {
        headerPopup.style.display = "block"
    });

    videoClose.addEventListener('click', function () {
        headerPopup.style.display = "none"
    });
    window.onclick = function (event) {
        if (event.target === headerPopup) {
            headerPopup.style.display = "none";
        }
    }
}

export default modalPopup;
