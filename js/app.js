const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const container = document.querySelector(".container");

const appendSeconds = document.querySelector('#seconds');
const appendMinutes = document.querySelector('#minutes');
let interval;

let seconds = 0;
let minutes = 0;

const addZero = (unit) => {
    if (unit >= 0 && unit <= 9) {
        return `0${unit}`;
    } else {
        return unit;
    }
}

const startCountdown = () => {
    seconds++;
    appendSeconds.innerHTML = addZero(seconds);
    if (seconds === 59) {
        minutes++;
        appendMinutes.innerHTML = addZero(minutes);
        seconds = -1;
        seconds++;
        appendSeconds.innerHTML = addZero(seconds);
    }
}

const resetCountdown = () => {
    clearInterval(interval);
    seconds = 0;
    appendSeconds.innerHTML = "s";
    minutes = 0;
    appendMinutes.innerHTML = "m";
    startButton.innerText = "start";
    startButton.disabled = false;
    pauseButton.disabled = true;
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    pauseButton.disabled = false;
    interval = setInterval(startCountdown, 1000);
});

pauseButton.addEventListener('click', () => {
    startButton.disabled = false;
    pauseButton.disabled = true;
    clearInterval(interval);
    startButton.innerText = "continue";
});

const recordTime = () => {
    const timeJournal = document.createElement("div");
    timeJournal.style.width = "150px";
    timeJournal.style.height = "auto";
    timeJournal.style.outline = "2px dotted orange";
    timeJournal.style.margin = "7px 0 8px 0";
    timeJournal.style.borderRadius = "10px";
    container.append(timeJournal);

    const timeJournalRow = document.createElement("div");
    timeJournalRow.style.width = "100%";
    timeJournalRow.style.height = "45px";
    timeJournalRow.style.display = "flex";
    timeJournalRow.style.justifyContent = "space-around";
    timeJournal.append(timeJournalRow);

    const timeJournalM = document.createElement("p");
    const timeJournalS = document.createElement("p");
    timeJournalM.style.fontSize = "18px" && (timeJournalS.style.fontSize = "18px");
    timeJournalM.style.fontWeight = "900" && (timeJournalS.style.fontWeight = "900")
    timeJournalM.style.color = "navajowhite" && (timeJournalS.style.color = "navajowhite");
    timeJournalM.innerHTML = addZero(minutes);
    timeJournalS.innerHTML = addZero(seconds);
    timeJournalRow.append(timeJournalM);
    timeJournalRow.append(timeJournalS);

    container.style.height = "auto";
    container.style.overflowX = "hidden";
}

const timeData = [];

const reloadPage = () => {
    location.reload();
}

console.log("adaptive design for desktop(>= 769px), tablet (381px - 768px), mobile (<= 380px)\nasynchronous click events\ncertain buttons are disabled and enabled back again upon starting, pausing, resetting countdown\nrecord time button which appends minutes and seconds");