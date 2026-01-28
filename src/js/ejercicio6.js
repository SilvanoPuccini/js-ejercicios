document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.getElementById("time");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resetBtn = document.getElementById("resetBtn");

  let seconds = 0;
  let interval = null;

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timeEl.textContent = `${hrs}:${mins}:${secs}`;
  };

  startBtn.onclick = () => {
    if (interval) return;
    interval = setInterval(() => {
      seconds++;
      formatTime();
    }, 1000);
  };

  stopBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
  };

  resetBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    formatTime();
  };
});
