import '../css/main.css';

addEventListener("DOMContentLoaded", function (event) {
    var menuClose = document.getElementById('menu-close-btn');
    var menuBtn = document.getElementById('menu-btn');
    var menuModal = this.document.getElementById('menu-modal');

    menuClose.addEventListener('click', function (event) {
        menuModal.classList.remove('active');
    })

    menuBtn.addEventListener('click', function (event) {
        menuModal.classList.add('active');
    })

    var paragraph = [...document.querySelectorAll('.hightlight-text')];
    var spans = [];

    paragraph.forEach(function (p) {
        var htmlString = '';
        var pArray = p.textContent.split('');
        for (var i = 0; i < pArray.length; i++) {
            htmlString += `<span class='hightlight-span'>${pArray[i]}</span>`
        }
        p.innerHTML = htmlString;
    })

    spans = [...this.document.querySelectorAll('.hightlight-span')];

    function revealSpan () {
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
                let { left, top } = spans[i].getBoundingClientRect();
                top = top - (window.innerHeight * .4);
                let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
                if (opacityValue < 1) {
                    opacityValue = 0.4;
                }
                opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
                spans[i].style.opacity = opacityValue;
            }
        }
    }

    this.window.addEventListener('scroll', function () {
        revealSpan();
    })
});