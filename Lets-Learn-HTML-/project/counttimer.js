const targetDate = new Date("2024-04-29T00:00:00"); // Set your target date and time here

const countdown = document.getElementById('countdown');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

const getTimeRemaining = () => {
  const today = new Date();
  const timeRemaining = targetDate.getTime() - today.getTime();

  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const oneSecond = 1000;

  // Calculate remaining days, hours, minutes, seconds
  const days = Math.floor(timeRemaining / oneDay);
  const hours = Math.floor((timeRemaining % oneDay) / oneHour);
  const minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
  const seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);

  // Update the countdown display
  daysSpan.textContent = days;
  hoursSpan.textContent = hours.toString().padStart(2, '0');
  minutesSpan.textContent = minutes.toString().padStart(2, '0');
  secondsSpan.textContent = seconds.toString().padStart(2, '0');
}

const updateCountdown = () => {
  getTimeRemaining();
  const interval = setInterval(getTimeRemaining, 1000);

  // Clear the interval when the countdown reaches zero
  if (timeRemaining <= 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h2>Launch Time!</h2>";
  }
}

updateCountdown();
