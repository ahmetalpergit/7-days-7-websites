'use strict';

// Set the date we're counting down to
const countDownDate = new Date("Mar 29, 2021 03:00:00").getTime();

// Update the count down every 1 second
const coundownTimer = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = `
    <div class="time-container">
        <div class="time">${days < 10 ? `0${days}` : days}</div>
        <div class="unit">DAYS</div>
    </div>
    <div class="time-container">
        <div class="time">${hours < 10 ? `0${hours}` : hours}</div>
        <div class="unit">HOURS</div>
    </div>
    <div class="time-container">
        <div class="time">${minutes < 10 ? `0${minutes}` : minutes}</div>
        <div class="unit">MINS</div>
    </div>
    <div class="time-container">
        <div class="time">${seconds < 10 ? `0${seconds}` : seconds}</div>
        <div class="unit">SECS</div>
    </div>
  `;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(coundownTimer);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
