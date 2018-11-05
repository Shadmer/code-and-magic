'use strict';

window.colorizeElement = function (elem, colors, setColor) {
    elem.addEventListener('click', function () {
        setColor(elem, colors);
    });
};
