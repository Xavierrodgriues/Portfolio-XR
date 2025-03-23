function changeTime() {
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();
  var amPm = hours >= 12 ? " PM" : " AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var currentTime = hours + " : " + minutes + " : " + seconds + amPm;
  document.querySelector(".time").textContent = currentTime;
}

function getMonth(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

function changeDateAndTime() {
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();
  var amPm = hours >= 12 ? " PM" : " AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var currentDate =
    dt.getDate() + " " + getMonth(dt.getMonth() + 1) + ", " + dt.getFullYear();
  var currentTime = hours + " : " + minutes + " : " + seconds + amPm;

  document.querySelector(".footer-time").textContent = currentTime;
  document.querySelector(".footer-date").textContent = currentDate;
}

// Update time and date every second
setInterval(function () {
  changeTime();
  changeDateAndTime();
}, 1000);
