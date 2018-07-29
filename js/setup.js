'use strict';

// Окно выбора волшебника
var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");


// Массивы с данными о волшебниках
var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var WIZARD_COATS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];

// Массив из 4-х персонажей
//toDo: пуш в массив
var wizards = [getWizard(), getWizard(), getWizard(), getWizard()];

// Шаблон волшебника
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

// Блок для отрисовки элементов
var similarListElement = document.querySelector(".setup-similar-list");

// toDo: разузнать про фрагменты, а не просто копипастить :)
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild( renderWizard(wizards[i]) );
}

similarListElement.appendChild(fragment);

document.querySelector(".setup-similar").classList.remove("hidden");


// Функции

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
    return Math.floor( min + Math.random() * (max + 1 - min) );
}

// Генерация случайного имени волшебника
function getFullNameWizard(names, surnames) {
    var name = names[getRandom(0, names.length - 1)];
    var surname = surnames[getRandom(0, surnames.length - 1)];
    return name + " " + surname;
}

// Генератор волшебника
// toDo: локальные переменные?
function getWizard() {
    var wizard = {};
    wizard.name = getFullNameWizard(WIZARD_NAMES, WIZARD_SURNAMES);
    wizard.coatColor = WIZARD_COATS[getRandom(0, WIZARD_COATS.length - 1)];
    wizard.eyesColor = WIZARD_EYES[getRandom(0, WIZARD_EYES.length - 1)];
    return wizard;
}