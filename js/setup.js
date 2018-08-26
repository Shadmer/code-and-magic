'use strict';

// Константы
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];
var WIZZARD_FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

// Кастомизация волшебников
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

// Окно выбора волшебников
var userDialog = document.querySelector(".setup");
// userDialog.classList.remove("hidden");

//Кнопки открыть и закрыть
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');

var setupUserName = document.querySelector('.setup-user-name');

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


// Функции

// Генератор объекта волшебника
function getWizard() {
    var wizard = {};
    wizard.name = getFullNameWizard();
    wizard.coatColor = WIZARD_COATS[getRandom(0, WIZARD_COATS.length - 1)];
    wizard.eyesColor = WIZARD_EYES[getRandom(0, WIZARD_EYES.length - 1)];
    return wizard;
}

// Генерация случайного имени волшебника
function getFullNameWizard() {
    var name = WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length - 1)];
    var surname = WIZARD_SURNAMES[getRandom(0, WIZARD_SURNAMES.length - 1)];
    return name + " " + surname;
}

// Генератор элемента волшебника
function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
    return wizardElement;
}

// Генератор рандомного числа
function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function onPopupEscPress(e) {
    if (e.keyCode === ESC_KEYCODE) {
        closePopup();
    }
}

function openPopup(e) {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

function closePopup(e) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

function focusUserName() {
    document.removeEventListener('keydown', onPopupEscPress);
}

function blurUserName() {
    document.addEventListener('keydown', onPopupEscPress);
}

function setCoatFill() {
    var i = getRandom(0,WIZARD_COATS.length - 1);
    wizardCoat.style.fill = WIZARD_COATS[i];
}

function setEyesFill() {
    var i = getRandom(0,WIZARD_EYES.length - 1);
    wizardEyes.style.fill = WIZARD_EYES[i];
}

function setFireballColor(arr) {
    var i = getRandom(0, WIZZARD_FIREBALLS.length - 1);
    wizardFireball.style.backgroundColor = WIZZARD_FIREBALLS[i];
}

// Обработчики

setupOpen.addEventListener('click', function (e) {
    openPopup();
});

setupOpenIcon.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener('click', function (e) {
    closePopup();
});

setupClose.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

setupUserName.addEventListener('focus', function () {
    focusUserName();
});

setupUserName.addEventListener('blur', function () {
    blurUserName();
});

wizardCoat.addEventListener('click', function () {
    setCoatFill();
});

wizardEyes.addEventListener('click', function () {
    setEyesFill();
});

wizardFireball.addEventListener('click', function () {
    setFireballColor();
});