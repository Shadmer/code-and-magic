'use strict';

(function () {
    var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
    var WIZARD_FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
    var wizardCoat = document.querySelector('.wizard-coat');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var wizards = [];

    //Сортировка и рендеринг волшебников
    var renderWizard = function (wizard) {
        var similarWizardTemplate = document.querySelector("#similar-wizard-template")
            .content
            .querySelector(".setup-similar-item");
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
        wizardElement.querySelector(".wizard-coat").style.fill = wizard.colorCoat;
        wizardElement.querySelector(".wizard-eyes").style.fill = wizard.colorEyes;
        return wizardElement;
    };
    var renderWizards = function (wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
            var wizard = renderWizard(wizards[i]);
            fragment.appendChild(wizard);
        }
        document.querySelector(".setup-similar-list").innerHTML = '';
        document.querySelector(".setup-similar-list").appendChild(fragment);
        document.querySelector(".setup-similar").classList.remove("hidden");
    };
    var getRank = function (wizard) {
        var rank = 0;

        if (wizard.colorCoat === wizardCoat.style.fill) {
            rank += 2;
        }
        if (wizard.colorEyes === wizardEyes.style.fill) {
            rank += 1;
        }

        return rank;
    };
    var updateWizards = function () {
        renderWizards(wizards.sort(function (left, right) {
            return getRank(right) - getRank(left);
        }));
    };

    colorizeElement(wizardCoat, WIZARD_COATS, wizard.fillElement, updateWizards);
    colorizeElement(wizardEyes, WIZARD_EYES, wizard.fillElement, updateWizards);
    colorizeElement(wizardFireball, WIZARD_FIREBALLS, wizard.changeElementBackground);

    //load
    var onWizardsLoad = function (data) {
        wizards = data;
        updateWizards();
    };
    var onWizardsError = function (errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = '0';
        node.style.right = '0';
        node.style.fontSize = '30px';
        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };
    backend.load(onWizardsLoad, onWizardsError);

    // save
    var userDialog = document.querySelector(".setup");
    var form = document.querySelector(".setup-wizard-form");
    var formData = new FormData(form);
    var onWizardsSave = function () {
        userDialog.classList.add('hidden');
    };
    userDialog.classList.remove('hidden');
    form.addEventListener('submit', function (e) {
        backend.save(formData, onWizardsSave, onWizardsError);
        e.preventDefault();
    });

})();