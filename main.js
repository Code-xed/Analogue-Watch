const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.getElementsByClassName('second')[0];
const sdeg = 6;
const mdeg = 6;
const hdeg = 30;
const hmdeg = 45 / 60;

function Tick() {
  const d = new Date();
  let seconds = d.getSeconds();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let rs = (seconds * mdeg) + 90;
  let rh = (hours * hdeg) + 90;
  let rm = (minutes * 6) + hmdeg + 90;

  if (hours > 12) {
    hours -= 12;
  }

  secondHand.style.transform = `rotate(${rs}deg)`;
  minuteHand.style.transform = `rotate(${rm}deg)`;
  hourHand.style.transform = `rotate(${rh}deg)`;
}

setInterval(Tick, 1000);