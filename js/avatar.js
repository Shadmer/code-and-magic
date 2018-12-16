'use strict';

(function () {
    var FILE_TYPES = ['png', 'gif', 'jpg', 'jpeg'];

    var prewiew = document.querySelector('.setup-user-pic');
    var fileChooser = document.querySelector('.upload input[type=file]');

    fileChooser.addEventListener('change', function () {
        var file = fileChooser.files[0];
        var fileName = file.name.toLowerCase();
        var matches = FILE_TYPES.some(function (value) {
            return fileName.endsWith(value);
        });
        if (matches) {
            var reader = new FileReader();

            reader.addEventListener('load', function () {
                prewiew.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    });

})();