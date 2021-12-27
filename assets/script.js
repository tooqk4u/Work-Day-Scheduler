$(document).ready(function(){

    // set date and time in header
var currentTime = moment ().format("dddd MMMM, Do, YYYY, h:mm A");
var showTime = document.getElementById("currentDay");
showTime.innerHTML = currentTime;

let Time = {
    "7 AM": "",
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
    "6 PM": "",
};


// TIMEBLOCK color changes based on current time

var counter = 7;
for(const property in Time) {
    var textInput = ".text-input" + counter;
    $(textInput).text(Time[property]);
    var hourId = "#hour" + counter;
    var presentHour = moment().hour();
    var timeString = $(hourId).text();
    var time = hourNumberFromHourString(timeString);
     
    if(time < presentHour) {
        $(textInput).addClass("past");
    } else if (time > presentHour) {
        $(textInput).addClass("future");
    } else {
        $(textInput).addClass("present");
    }
    counter ++;
}
//switch statement to convert hour string into hour num
function hourNumberFromHourString(hourtring) {
   switch(hourtring) {
       case "7 AM": return 7;
       case "8 AM": return 8;
       case "9 AM": return 9;
       case "10 AM": return 10;
       case "11 AM": return 11;
       case "12 PM": return 12;
       case "1 PM": return 13;
       case "2 PM": return 14;
       case "3 PM": return 15;
       case "4 PM": return 16;
       case "5 PM": return 17;
       case "6 PM": return 18;
   };
};

//Save to local storage
$(".saveBtn").on("click", function() {
   var dataId = $(this).attr("data-id")
    var text = $("." + dataId).val();
    localStorage.setItem(dataId, text)
displayText()
});
function displayText(){
for (let i = 9; i < 18; i++) {
    if(localStorage.getItem("text-input" + i)){
    $(".text-input" + i).val(localStorage.getItem("text-input" + i))
    }
  
    
}
}
displayText()
});