let [hours, minutes, seconds] = [0, 0, 0];  // Time values
let timer = null;                          // Timer variable
let display = document.getElementById("display");  // time

function updateDisplay() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;  // Show formatted time
}

function start() {
    timer = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000)
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    document.getElementById("laps").innerHTML = '';
}

function lap() {
    // if (timer === null) return;

    const lapTime = display.innerText;

    const lapList = document.getElementById("laps");

    const entry = document.createElement("div");

    entry.className = "lap-time";

    entry.innerText = `Lap: ${lapTime}`;

    lapList.appendChild(entry);
}
