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


    // var draggables = document.querySelectorAll('.drag');
    // var mousedown = false;
    // var current;
    // var draggables;
    // var currentx = 0;
    // var currenty = 0;
    // var offsetx = 0;
    // var offsety = 0;
    // var newx = 0;
    // var newy = 0;
    // var marginTop = 0;
    // var marginLeft = 0;

    // for (var i = 0; i < draggables.length; i++) {
    //     var item = draggables[i];

    //     item.addEventListener('mousemove', function (e) {
    //         if (mousedown) {
    //             if (offsetx == 0 && offsety == 0) {
    //                 offsetx = (e.clientX - currentx);
    //                 offsety = (e.clientY - currenty);
    //             }

    //             newx = (e.clientX - offsetx);
    //             newy = (e.clientY - offsety);

    //             current.style.left = newx + "px";
    //             current.style.top = newy + "px";
    //             current.style.bottom = 'auto';
    //             current.style.right = 'auto';
    //         }
    //     });


    //     item.onmouseup = (function() {
    //         return function() {
    //             mousedown = false;
    //             currentx = 0;
    //             currenty = 0;
    //             offsetx = 0;
    //             offsety = 0;
    //             marginTop = 0;
    //             marginLeft = 0;
    //         }
    //     })();

    //     item.onmousedown = (function() {
    //         var index = i;
    //         return function() {
    //             mousedown = true;
    //             current = draggables[index];

    //             marginTop = parseInt(window.getComputedStyle(current, null).getPropertyValue('margin-top'));
    //             marginLeft = parseInt(window.getComputedStyle(current, null).getPropertyValue('margin-left'));

    //             let rect = current.getBoundingClientRect();
    //             current.style.position = "fixed";
    //             current.style.cursor = "pointer";
    //             current.style.zIndex = "1000";

    //             currentx = rect.left - marginLeft;
    //             currenty = rect.top - marginTop;
    //         }
    //     })();
    // }
});