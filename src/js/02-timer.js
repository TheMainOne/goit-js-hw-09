import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector("#datetime-picker");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenTime = selectedDates[0].getTime();
    const currentTime = Date.now();

    if (choosenTime < currentTime) {
      window.alert('Please choose a date in the future')
    } else {
      button.removeAttribute('disabled');

      setInterval(() => {
        const nowTime = Date.now();
        const deltaTime = choosenTime - nowTime;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
              console.log(`${days}:${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
  },
};
const fp = flatpickr(myInput, options);
const button = document.querySelector('button[data-start]');

button.setAttribute('disabled', 'disabled');


function pad(value) {
  return String(value).padStart(2, "0")
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}