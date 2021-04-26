function christmasCountdown() {
  var Today = new Date();
  var presentMonth = Today.getMonth() + 1;
  var presentDay = Today.getDate();
  var nextChristmasYear = Today.getFullYear();
  if (presentMonth == 12 && presentDay > 25) {
    nextChristmasYear = nextChristmasYear + 1;
  }
  var nextChristmasDate = nextChristmasYear + "-12-25T00:00:00.000Z";
  var christmasDay = new Date(nextChristmasDate);
  var secs = Math.floor((christmasDay.getTime() - Today.getTime()) / 1000);
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  if (presentMonth != 12 || (presentMonth == 12 && presentDay != 25)) {
    days = Math.floor(secs / (3600 * 24));
    secs -= days * 3600 * 24;
    hours = Math.floor(secs / 3600);
    secs -= hours * 3600;
    minutes = Math.floor(secs / 60);
    secs -= minutes * 60;
    seconds = secs;
  }
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  setTimeout(christmasCountdown, 1000);
}
christmasCountdown();
