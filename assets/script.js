$(document).ready(function(){

    // set date and time in header
var currentTime = moment ().format("dddd MMMM, Do, YYYY, h:mm A");
var showTime = document.getElementById("currentDay");
showTime.innerHTML = currentTime;
})