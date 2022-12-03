
// Set the date we're counting down to
var countDownDate = new Date("mar 1, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
var now = new Date().getTime();
    
  // Find the distance between now and the count down date
var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 document.getElementById("days").innerHTML = d;
 document.getElementById("hours").innerHTML = h < 10 ? '0' + h : h;
 document.getElementById("minuts").innerHTML = m < 10 ? '0' + m : m;
 document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s ;

    
  // If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
}
}, 1000);

