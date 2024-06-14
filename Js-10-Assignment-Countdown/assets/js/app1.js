let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minutes = document.getElementById("min");
let second = document.getElementById("sec");
// let mssecond =  document.getElementById("mssec")

let date = new Date();
let baqraEid = new Date("6/17/2024");

let datetime = date.getTime();
let difference = baqraEid.getTime() - datetime;

// let datetime = date.getTime()
// let difference = baqraEid.getTime()- datetime
// day.innerHTML = Math.floor(difference / 1000 / 60 / 60 / 24)
// hour.innerHTML = Math.floor(difference / 1000 / 60 / 60 )
// minutes.innerHTML = Math.floor(difference / 1000 / 60 )
// second.innerHTML = Math.floor(difference / 1000   )
let intervel = setInterval(function () {
  difference = difference - 1000;
  let currenttime = new Date();
  day.innerHTML = Math.floor(difference / 1000 / 60 / 60 / 24);
  hour.innerHTML = Math.floor(24 - currenttime.getHours());
  minutes.innerHTML = Math.floor(60 - currenttime.getMinutes());
  second.innerHTML = Math.floor(60 - currenttime.getSeconds());
  // mssecond.innerHTML = Math.floor(difference)
}, 1000);
