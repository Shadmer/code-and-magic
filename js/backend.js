'use strict';

(function() {
    window.backend = {
        load: function(onLoad, onError) {
            var URL = "https://js.dump.academy/code-and-magick/data";
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                switch (xhr.status) {
                    case 200:
                        onLoad(xhr.response);
                        break;

                    default:
                        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
                }
            });

            xhr.addEventListener('error', function () {
                onError('Произошла ошибка соединения');
            });

            xhr.addEventListener('timeout', function () {
                onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
            });

            xhr.timeout = 10000;
            xhr.open('GET', URL);
            xhr.send();
        },
        save: function(data, onLoad, onError) {
            var URL = "https://js.dump.academy/code-and-magick";
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                switch (xhr.status) {
                    case 200:
                        onLoad(xhr.response);
                        break;

                    default:
                        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
                }
            });

            xhr.open('POST', URL);
            xhr.send(data);
        }
    };

}());