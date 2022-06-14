let clicks = 0;
const cookie = document.getElementById('button__cookie');
const counter: any = document.getElementById('cookie__counter');
const autoclicker: any = document.getElementById('button__autoclick');
const indicator: any = document.getElementById('indicator');
const doublePoints: any = document.getElementById('button__dblpoints');

let autoclickerCount: any = 0; // Autoclicker count
let doublePointsBought = false; //Is Bought

// Prices
let autoclickerPrice = 3;
let doublePointsPrice = 10;

// import $ from "jquery";

// !init
indicator.style.display= 'none';

cookie?.addEventListener('click', () => {
    addClick(!doublePointsBought ? 1 : 2);
});

autoclicker?.addEventListener('mouseup', (e: any) => {
    if (clicks >= 3) {
        autoclickerCount++;
        indicator.style.display = 'block';
        addClick(-3); //Takes away score
        addAutoclicker(); //Adds an instance of the autoclicker to the player, this way multiple can be stacked.
        return;
    }
    return; //Ends function if you can't afford autoclicker.
});

doublePoints?.addEventListener('mouseup', (e: any) => {
    if (clicks >= doublePointsPrice && !doublePointsBought) {
        addClick(-10); //Takes away score
        doublePointsBought = true;
        document.getElementById('dblpoints')!.innerHTML = `Double Points: ${doublePointsBought}`;
        return;
    }
    return;
});

function addClick(amount: number){
    clicks += amount;
    counter!.innerHTML = clicks;
    if (clicks >= autoclickerPrice) {
        autoclicker!.style.backgroundColor = '#238823';
    } else {
        autoclicker!.style.backgroundColor = '#D2222D';
    }
    
    if (clicks >= doublePointsPrice) {
        doublePoints!.style.backgroundColor = '#238823';
    } else {
        doublePoints!.style.backgroundColor = '#D2222D';
    }
}

function addAutoclicker() {
    let aniSpeed = 2000 / autoclickerCount / 1000;
    document.getElementById('Autoclickers')!.innerHTML = `Autoclickers: ${autoclickerCount}`;
    setInterval(() => {
        if (Math.ceil(Math.random() * 2) == 2) {
            addClick(1);
        }
        indicator.style.animation = `pulse ${aniSpeed}s linear infinite`;
        cookie!.style.animation = `pulse__cookie ${aniSpeed}s linear infinite`;
    }, 1000);
}