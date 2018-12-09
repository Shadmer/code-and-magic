'use strict';

(function () {
    var prevTimer;
    window.wizard = {

        fillElement: function (elem, color, update) {
            var i = util.getRandom(0, color.length - 1);
            elem.style.fill = color[i];
            clearTimeout(prevTimer);
            prevTimer = setTimeout(function () {
                update();
            }, 300)
        },
        changeElementBackground: function (elem, color) {
            var i = util.getRandom(0, color.length - 1);
            elem.style.backgroundColor = color[i];
        }
    }
})();