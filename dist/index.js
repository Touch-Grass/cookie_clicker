"use strict";
let clicks = 0;
const cookie = document.getElementById('button__cookie');
const counter = document.getElementById('cookie__counter');
const autoclicker = document.getElementById('button__autoclick');
const indicator = document.getElementById('indicator');
const doublePoints = document.getElementById('button__dblpoints');
let autoclickerCount = 0;
let doublePointsBought = false;
let autoclickerPrice = 3;
let doublePointsPrice = 10;
indicator.style.display = 'none';
cookie === null || cookie === void 0 ? void 0 : cookie.addEventListener('click', () => {
    addClick(!doublePointsBought ? 2 : 1);
});
autoclicker === null || autoclicker === void 0 ? void 0 : autoclicker.addEventListener('mouseup', (e) => {
    if (clicks >= 3) {
        autoclickerCount++;
        indicator.style.display = 'block';
        addClick(-3);
        addAutoclicker();
        return;
    }
    else {
        return;
    }
});
doublePoints === null || doublePoints === void 0 ? void 0 : doublePoints.addEventListener('mouseup', (e) => {
    if (clicks >= doublePointsPrice && !doublePointsBought) {
        addClick(-10);
        doublePointsBought = true;
        document.getElementById('dblpoints').innerHTML = `Double Points: ${doublePointsBought}`;
        return;
    }
    else {
        return;
    }
});
function addClick(amount) {
    clicks += amount;
    counter.innerHTML = clicks;
    if (clicks >= autoclickerPrice) {
        autoclicker.style.backgroundColor = 'green';
    }
    else {
        autoclicker.style.backgroundColor = 'red';
    }
    if (clicks >= doublePointsPrice) {
        doublePoints.style.backgroundColor = 'green';
    }
    else {
        doublePoints.style.backgroundColor = 'red';
    }
}
function addAutoclicker() {
    let aniSpeed = 2000 / autoclickerCount / 1000;
    document.getElementById('Autoclickers').innerHTML = `Autoclickers: ${autoclickerCount}`;
    setInterval(() => {
        if (Math.ceil(Math.random() * 2) == 2) {
            addClick(1);
        }
        indicator.style.animation = `pulse ${aniSpeed}s linear infinite`;
        cookie.style.animation = `pulse__cookie ${aniSpeed}s linear infinite`;
    }, 1000);
}
//# sourceMappingURL=index.js.map