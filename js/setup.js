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

    document.querySelector(".setup-similar").classList.remove("hidden");

    function getWizard() {
        var wizard = {};
        wizard.name = getFullNameWizard();
        wizard.coatColor = WIZARD_COATS[util.getRandom(0, WIZARD_COATS.length - 1)];
        wizard.eyesColor = WIZARD_EYES[util.getRandom(0, WIZARD_EYES.length - 1)];
        return wizard;
    }

    function getFullNameWizard() {
        var name = WIZARD_NAMES[util.getRandom(0, WIZARD_NAMES.length - 1)];
        var surname = WIZARD_SURNAMES[util.getRandom(0, WIZARD_SURNAMES.length - 1)];
        return name + " " + surname;
    }

    function renderWizard(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
        wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
        wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
        return wizardElement;
    }

    function setCoatFill() {
        var i = util.getRandom(0, WIZARD_COATS.length - 1);
        wizardCoat.style.fill = WIZARD_COATS[i];
    }

    function setEyesFill() {
        var i = util.getRandom(0, WIZARD_EYES.length - 1);
        wizardEyes.style.fill = WIZARD_EYES[i];
    }

    function setFireballColor(arr) {
        var i = util.getRandom(0, WIZZARD_FIREBALLS.length - 1);
        wizardFireball.style.backgroundColor = WIZZARD_FIREBALLS[i];
    }

    wizardCoat.addEventListener('click', function () {
        setCoatFill();
    });
    wizardEyes.addEventListener('click', function () {
        setEyesFill();
    });
    wizardFireball.addEventListener('click', function () {
        setFireballColor();
    });

    // magicShop
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var artifactsElement = document.querySelector('.setup-artifacts');
    var draggedItem = null;

    function dragStart(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            draggedItem = e.target.cloneNode(true);
            e.dataTransfer.setData('text/plain', e.target.alt);
            artifactsElement.style.outline = '2px dashed red';
        }
    }

    function dragMove(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            draggedItem = e.target;
            e.dataTransfer.setData('text/plain', e.target.alt);
            artifactsElement.style.outline = '2px dashed red';
        }
    }

    function dragEnter(e) {
        if(draggedItem) {
            e.target.style.backgroundColor = 'yellow';
        }
    }

    function dragLeave(e) {
        e.target.style.backgroundColor = '';
    }

    function dragDrop(e) {
        if(e.target.innerHTML) {
            return false;
        } else if (draggedItem) {
            e.target.appendChild(draggedItem);
            e.target.style.backgroundColor = '';
            artifactsElement.style.outline = '';
            draggedItem = null;
        } else {
            return false;
        }
    }

    function dragEnd(e) {
        artifactsElement.style.outline = '';
        draggedItem = null;
    }

    shopElement.addEventListener('dragstart', dragStart);
    artifactsElement.addEventListener('dragstart', dragMove);
    // Просто запонить
    artifactsElement.addEventListener('dragover', function (e) {
        e.preventDefault();
        return false;
    });
    artifactsElement.addEventListener('dragenter', dragEnter);
    artifactsElement.addEventListener('dragleave', dragLeave);
    artifactsElement.addEventListener('drop', dragDrop);
    shopElement.addEventListener('dragend', dragEnd);

})();

