'use strict';

(function () {
    var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
    var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
    var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];

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
})();

