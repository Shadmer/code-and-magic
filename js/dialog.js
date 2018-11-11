'use strict';

(function () {
    var userDialog = document.querySelector(".setup");
    var setupOpen = document.querySelector('.setup-open');
    var setupOpenIcon = document.querySelector('.setup-open-icon');
    var setupClose = document.querySelector('.setup-close');
    var setupUserName = document.querySelector('.setup-user-name');
    var dialogHandle = document.querySelector('.upload');

    var onPopupEscPress = function (e) {
        util.isEscEvent(e, closePopup);
    };
    var openPopup = function (e) {
        userDialog.classList.remove('hidden');
        document.addEventListener('keydown', onPopupEscPress);
    };
    var closePopup = function (e) {
        userDialog.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
        userDialog.style.top = "";
        userDialog.style.left = "";
    };
    var focusUserName = function () {
        document.removeEventListener('keydown', onPopupEscPress);
    };
    var blurUserName = function () {
        document.addEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function (e) {
        openPopup();
    });
    setupOpenIcon.addEventListener('keydown', function (e) {
        util.isEnterEvent(e, openPopup);
    });
    setupClose.addEventListener('click', function (e) {
        closePopup();
    });
    setupClose.addEventListener('keydown', function (e) {
        util.isEnterEvent(e, closePopup);
    });
    setupUserName.addEventListener('focus', function () {
        focusUserName();
    });
    setupUserName.addEventListener('blur', function () {
        blurUserName();
    });

    dialogHandle.addEventListener('click', function (e) {
        e.preventDefault();
    });

    // первый подход смещения
    dialogHandle.addEventListener('mousedown', function (e) {
        e.preventDefault();

        var startCoords = {
            x: e.clientX,
            y: e.clientY
        };


        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            var shift = {
                x: moveEvt.clientX - startCoords.x,
                y: moveEvt.clientY - startCoords.y
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            userDialog.style.top = (userDialog.offsetTop + shift.y) + 'px';
            userDialog.style.left = (userDialog.offsetLeft + shift.x) + 'px';
        };
        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    /*Второй подход смещения
    userDialog.addEventListener('mousedown', function (e) {
        e.preventDefault();

        function onMouseMove(moveEvt) {
            userDialog.style.top = moveEvt.clientY + 'px';
            userDialog.style.left = moveEvt.clientX + 'px';
        }

        function onMouseUp(upEvt) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });*/
})();

