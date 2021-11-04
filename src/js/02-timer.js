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
              console.log(convertMs(currentTime - choosenTime));
      }, 1000);
    }
  },
};
const fp = flatpickr(myInput, options);
const button = document.querySelector('button[data-start]');

button.setAttribute('disabled', 'disabled');

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = pad(Math.floor(ms / day));
//   const hours = pad(Math.floor((ms % day) / hour));
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// function pad(value) {
//   return String(value).padStart(2 ,'0')
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}