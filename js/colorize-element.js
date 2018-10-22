'use strict';

(function () {

    var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
    var WIZZARD_FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    var setCoatFill = function () {
        var i = util.getRandom(0, WIZARD_COATS.length - 1);
        wizardCoat.style.fill = WIZARD_COATS[i];
    };
    var setEyesFill = function () {
        var i = util.getRandom(0, WIZARD_EYES.length - 1);
        wizardEyes.style.fill = WIZARD_EYES[i];
    };
    var setFireballColor = function (arr) {
        var i = util.getRandom(0, WIZZARD_FIREBALLS.length - 1);
        wizardFireball.style.backgroundColor = WIZZARD_FIREBALLS[i];
    };

    //изменение
    

    wizardCoat.addEventListener('click', setCoatFill);
    wizardEyes.addEventListener('click', setEyesFill);
    wizardFireball.addEventListener('click', setFireballColor);
})();