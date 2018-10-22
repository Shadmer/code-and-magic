'use strict';

(function () {
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var artifactsElement = document.querySelector('.setup-artifacts');
    var artifactCell = document.querySelector('.setup-artifacts-cell');
    var draggedItem = null;

    var dragStart = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            draggedItem = e.target.cloneNode(true);
            e.dataTransfer.setData('text/plain', e.target.alt);
            artifactsElement.style.outline = '2px dashed red';
        }
    };
    var dragMove = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            draggedItem = e.target;
            e.dataTransfer.setData('text/plain', e.target.alt);
            artifactsElement.style.outline = '2px dashed red';
        }
    };
    var dragEnter = function (e) {
        if(e.target.innerHTML) {
            return false;
        } else if(draggedItem && artifactCell.className === e.target.className) {
            e.target.style.backgroundColor = 'yellow';
        }
    };
    var dragLeave = function (e) {
        e.target.style.backgroundColor = '';
    };
    var dragDrop = function (e) {
        if(e.target.innerHTML) {
            return false;
        } else if (draggedItem && artifactCell.className === e.target.className) {
            e.target.appendChild(draggedItem);
            e.target.style.backgroundColor = '';
            artifactsElement.style.outline = '';
            draggedItem = null;
        } else {
            return false;
        }
    };
    var dragEnd = function (e) {
        artifactsElement.style.outline = '';
        draggedItem = null;
    };

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