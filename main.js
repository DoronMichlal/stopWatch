let secondsEL = document.querySelector('#seconds');
let milisecondsEL = document.querySelector('#miliseconds');

let milisecondsCounter = 0;
let secondsCounter = 0;

let interval;

let setZero = (val) => (val < 10 ? `0${val}` : val);

let startTimer = () => {
    milisecondsEL.innerHTML = milisecondsCounter;
    milisecondsCounter++;

    if (milisecondsCounter < 10) {
        milisecondsCounter = setZero(milisecondsCounter);
    } else if (milisecondsCounter === 99) {
        milisecondsCounter = 0;
        secondsCounter++;

        secondsCounter = setZero(secondsCounter);
        console.log(secondsCounter);
        secondsEL.innerHTML = secondsCounter;
    }
};

/* Start */
document.querySelector('#start').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

/* Stop */
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval);
});

/* Reset */
document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(interval);
    milisecondsCounter = 0;
    secondsCounter = 0;
    secondsEL.innerHTML = '00';
    milisecondsEL.innerHTML = '00';
});
