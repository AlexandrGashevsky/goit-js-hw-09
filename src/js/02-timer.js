import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

 

btnStart.disabled = true;
let todaysDate = new Date();
const date = todaysDate.getTime();
let startTime = 0;
let time;
const options ={
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if(selectedDates[0] < date) {
      btnStart.disabled = true;
      window.alert("Please choose a date in the future");
    } else {
      startTime = selectedDates[0];
      btnStart.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);
btnStart.addEventListener('click', count);

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


function count(){
  let endDate = date;
  setInterval(() => 
 {
   endDate = new Date().getTime();
  time = convertMs(startTime - endDate);

  const d = time.days;
    if(d < 100){
      days.textContent = d.toString().padStart(2, '0');
    } else {
      days.textContent = d;
    }
  const h =  time.hours;
  hours.textContent = h.toString().padStart(2, '0');
  const m = time.minutes;
  minutes.textContent = m.toString().padStart(2, '0');
  const s = time.seconds;
  seconds.textContent = s.toString().padStart(2, '0');
}, 1000);
}
