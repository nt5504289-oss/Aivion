let totalTime = 25 * 60;
let time = totalTime;
let interval = null;

const timeEl = document.getElementById("time");
const progress = document.getElementById("progress");
const audio = document.getElementById("audio");
const lofiBtn = document.getElementById("lofiBtn");

// UPDATE TIMER
function update() {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    timeEl.innerText =
        String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");

    let percent = time / totalTime;
    progress.style.strokeDashoffset = 565 * (1 - percent);
}

// START
document.getElementById("start").onclick = () => {
    if (interval) return;

    interval = setInterval(() => {
        if (time > 0) {
            time--;
            update();
        } else {
            clearInterval(interval);
            interval = null;
            alert("⏰ Time's up!");
        }
    }, 1000);
};

// PAUSE
document.getElementById("pause").onclick = () => {
    clearInterval(interval);
    interval = null;
};

// RESET
document.getElementById("reset").onclick = () => {
    clearInterval(interval);
    interval = null;
    time = totalTime;
    update();
};

// 🎧 LOFI (WITH GLOW EFFECT)
lofiBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        lofiBtn.classList.add("active"); // 🔥 adds pulse animation
    } else {
        audio.pause();
        lofiBtn.classList.remove("active");
    }
};

// 🔊 VOLUME
document.getElementById("volume").oninput = (e) => {
    audio.volume = e.target.value;
};

// INIT
update();