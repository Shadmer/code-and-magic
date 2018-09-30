'use strict';

window.renderStatistics = function (ctx, names, times) {

    // Рисуем тень
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.beginPath();
    ctx.moveTo(90,20);
    ctx.lineTo(500,20);
    ctx.lineTo(610,145);
    ctx.lineTo(540,290);
    ctx.lineTo(90,290);
    ctx.lineTo(140,145);
    ctx.lineTo(90,20);
    ctx.fill();

    // Рисуем облако
    ctx.fillStyle = "rgb(256, 256, 256)";
    ctx.beginPath();
    ctx.moveTo(800,10);
    ctx.lineTo(500,10);
    ctx.lineTo(600,135);
    ctx.lineTo(540,280);
    ctx.lineTo(80,280);
    ctx.lineTo(130,135);
    ctx.lineTo(80,10);
    ctx.fill();

    // Выводим текст
    ctx.fillStyle = '#000'
    ctx.font = "16px PT Mono";
    ctx.fillText('Ура, вы победили!', 220, 40);
    ctx.fillText('Список результатов:', 220, 60);


    // Строим гистограмму
    var startX = 170;
    var startY = 100;
    var width = 40;
    var maxHeight = 150;
    var gutter = 90;
    var step = maxHeight / lib.getMaxElement(times);

    for (var i = 0; i < times.length; i++) {
        var height = times[i] * step;

        if(names[i] === "Вы") {
            ctx.fillStyle = "rgba(255, 0, 0, 1)";;
        } else {
            ctx.fillStyle = "rgba(46, 49," + lib.getRandom(0, 255) + ", 1)";
        }

        ctx.fillRect(startX + gutter * i, maxHeight - height + startY, width, height);
        ctx.fillText(names[i], startX + gutter * i, startY + maxHeight + 20);
        ctx.fillText(Math.floor(times[i]), startX + gutter * i, startY + maxHeight - height - 10);
    }
};


