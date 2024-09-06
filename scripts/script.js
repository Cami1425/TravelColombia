

var currentIndex = 0;

function plusSlides(n) {
    const pictures = document.getElementsByClassName('carrousel');
    const dots = document.getElementsByClassName('dot');
    const totalImgs = pictures.length;

    pictures[currentIndex].style = 'display: none;';
    dots[currentIndex].className = 'dot';
    var nextIndex = currentIndex + n;
    if (nextIndex < 0) {
        nextIndex = totalImgs - 1;
    } else if (nextIndex > totalImgs - 1) {
        nextIndex = 0;
    }

    currentIndex = nextIndex;
    pictures[currentIndex].style = 'display: block;';
    dots[currentIndex].className = 'dot active';
}

window.setInterval(() => {
    plusSlides(1);
}, 6000)

function goToCity() {
    const city = document.getElementsByClassName('citySelect')[0].value;
    window.location.href = city;
}