'use strict';

(function () {
    var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
    var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
    var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
    var WIZZARD_FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    document.querySelector(".setup-similar").classList.remove("hidden");

    var getWizard = function () {
        var wizard = {};
        wizard.name = getFullNameWizard();
        wizard.coatColor = WIZARD_COATS[util.getRandom(0, WIZARD_COATS.length - 1)];
        wizard.eyesColor = WIZARD_EYES[util.getRandom(0, WIZARD_EYES.length - 1)];
        return wizard;
    };
    var getFullNameWizard = function () {
        var name = WIZARD_NAMES[util.getRandom(0, WIZARD_NAMES.length - 1)];
        var surname = WIZARD_SURNAMES[util.getRandom(0, WIZARD_SURNAMES.length - 1)];
        return name + " " + surname;
    };
    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
        wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
        wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
        return wizardElement;
    };

    // Массив из 4-х персонажей
    var numberOfWizards = 4;
    var wizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
        wizards.push(getWizard());
    }

    // Шаблон волшебника
    var similarWizardTemplate = document.querySelector("#similar-wizard-template")
        .content
        .querySelector(".setup-similar-item");

    // Блок для отрисовки элементов
    var similarListElement = document.querySelector(".setup-similar-list");
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);


    var fillElement = function(elem, color) {
        var i = util.getRandom(0, color.length - 1);
        elem.style.fill = color[i];
    };

    var changeElementBackground = function(elem, color) {
        var i = util.getRandom(0, color.length - 1);
        elem.style.backgroundColor = color[i];
    };


    window.colorizeElement(wizardCoat, WIZARD_COATS, fillElement);
    window.colorizeElement(wizardEyes, WIZARD_EYES, fillElement);
    window.colorizeElement(wizardFireball, WIZZARD_FIREBALLS, changeElementBackground);
})();

