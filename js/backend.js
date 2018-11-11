'use strict';

(function() {
    var URL = "https://js.dump.academy/code-and-magick";

    window.backend = {

        load: function(onLoad, onError) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                onLoad(xhr.response);
            });


            xhr.open('GET', "https://js.dump.academy/code-and-magick/data");
            xhr.send();
        },

        save: function(data, onLoad, onError) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                //xhr.response - что это???
                onLoad(xhr.response);
            });

            xhr.open('POST', "https://js.dump.academy/code-and-magick");
            xhr.send(data);
        }
    };

}());