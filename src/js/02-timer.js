import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenTime = selectedDates[0].getTime();
    if (choosenTime < new Date().getTime()) {
      window.alert('Please choose a date in the future')
    }
  },
};
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);
