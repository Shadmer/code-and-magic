'use strict';

(function () {

    var ENTER_KEYCODE = 13;
    var ESC_KEYCODE = 27;

    window.util = {

        getRandom: function (min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        },

        // функция из stat
        getMaxElement: function (arr) {
            var max = -1;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        },

        isEnterEvent: function (e, action) {
            if (e.keyCode === ENTER_KEYCODE) {
                action();
            }
        },

        isEscEvent: function (e, action) {
            if (e.keyCode === ESC_KEYCODE) {
                action();
            }
        }

    };

})();




