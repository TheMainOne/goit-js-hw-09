import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

let timerId = null;
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');
const myInput = document.querySelector("#datetime-picker");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenTime = selectedDates[0].getTime();

    if (choosenTime < Date.now()) {
      window.alert('Please choose a date in the future')
    } else {
      button.removeAttribute('disabled');

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


        timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = choosenTime - currentTime;
        console.log(deltaTime);
        const { days, hours, minutes, seconds } = convertMs(deltaTime);

        daysSpan.textContent = `${days}`;
        hoursSpan.textContent = `${hours}`;
        minutesSpan.textContent = `${minutes}`;
        secondsSpan.textContent = `${seconds}`;

        if (deltaTime <= 0) {
          clearInterval(timerId);
        }
      }, 1000);
    }
  },
};
const fp = flatpickr(myInput, options);
const button = document.querySelector('button[data-start]');

button.setAttribute('disabled', 'disabled');


function addLeadingZero(value) {
  return String(value).padStart(2, "0")
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
