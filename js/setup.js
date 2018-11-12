'use strict';

(function () {
    var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
    var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
    var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
    var WIZARD_FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

    /*Кастомизация текущего волшебника*/
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    var fillElement = function (elem, color) {
        var i = util.getRandom(0, color.length - 1);
        elem.style.fill = color[i];
    };
    var changeElementBackground = function (elem, color) {
        var i = util.getRandom(0, color.length - 1);
        elem.style.backgroundColor = color[i];
    };

    window.colorizeElement(wizardCoat, WIZARD_COATS, fillElement);
    window.colorizeElement(wizardEyes, WIZARD_EYES, fillElement);
    window.colorizeElement(wizardFireball, WIZARD_FIREBALLS, changeElementBackground);

    // Шаблон волшебника
    var similarWizardTemplate = document.querySelector("#similar-wizard-template")
        .content
        .querySelector(".setup-similar-item");
    var similarListElement = document.querySelector(".setup-similar-list");
    var numberOfWizards = 4;


    //Старая генерация волшебника
    /*var getWizard = function () {
        var wizard = {};
        var getFullNameWizard = function () {
            var name = WIZARD_NAMES[util.getRandom(0, WIZARD_NAMES.length - 1)];
            var surname = WIZARD_SURNAMES[util.getRandom(0, WIZARD_SURNAMES.length - 1)];
            return name + " " + surname;
        };
        wizard.name = getFullNameWizard();
        wizard.coatColor = WIZARD_COATS[util.getRandom(0, WIZARD_COATS.length - 1)];
        wizard.eyesColor = WIZARD_EYES[util.getRandom(0, WIZARD_EYES.length - 1)];
        return wizard;
    };
    var numberOfWizards = 4;
    var wizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
        wizards.push(getWizard());
    }*/

    //load
    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
        wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
        wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
        return wizardElement;
    };

    var onWizardsLoad = function(wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < numberOfWizards; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);
        document.querySelector(".setup-similar").classList.remove("hidden");
    };

    var onWizardsError = function(errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };

    backend.load(onWizardsLoad, onWizardsError);

    // save
    var userDialog = document.querySelector(".setup");
    var form = document.querySelector(".setup-wizard-form");
    var formData = new FormData(form);

    var onWizardsSave = function() {
        userDialog.classList.add('hidden');
    };

    userDialog.classList.remove('hidden');
    form.addEventListener('submit', function (e) {
        backend.save(formData, onWizardsSave, onWizardsError);
        e.preventDefault();
    });
})();

