'use strict';

(function() {

    window.colorizeElement = function (elem, colors, setColor, update) {
        elem.addEventListener('click', function () {
            setColor(elem, colors, update);
        });
    };

}());
