let timer; // Variable to store interval timer
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(runStopwatch, 1000);
        document.getElementById('startStopButton').innerText = 'Stop';
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById('startStopButton').innerText = 'Start';
    }
}

function runStopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('display').innerText = 
        pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStopButton').innerText = 'Start';
    
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

document.getElementById('startStopButton').addEventListener('click', startStop);
document.getElementById('resetButton').addEventListener('click', reset);
