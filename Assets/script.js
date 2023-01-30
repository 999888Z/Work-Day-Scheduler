var input9AM = $('#input-9AM')
var input10AM = $('#input-10AM')
var input11AM = $('#input-11AM')
// add through 5PM
var saveItem = $('.saveBtn')
var currentDay = $('#currentDay');

var now = dayjs().format('dddd, MMMM D')
  currentDay.text(now)

var timeNow = dayjs().format('hA')
// var timeNow = "5PM"

var dayTimes = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
]

$(function () {
   for (let index = 0; index < dayTimes.length; index++) {
    var eachTime = $(`#${dayTimes[index]}`)
  eachTime.attr("class", "past row time-block")

  

    if (timeNow === dayTimes[index]) {
      eachTime.attr("class", "present row time-block")
    }

    else if (timeNow === dayTimes[index-1]) {
      eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-2]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-3]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-4]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-5]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-6]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-7]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-8]) {
  eachTime.attr("class", "future row time-block")
}

else if (timeNow === dayTimes[index-9]) {
  eachTime.attr("class", "future row time-block")
}
  } 
function saveText9AM(event) {
event.preventDefault();
console.log(this.id)
if (this.id === "button-9AM") {
  var  nineAM = input9AM.val();
  localStorage.setItem('stored9AM', nineAM)
  
}
else if (this.id === "button-10AM") {
  var  tenAM = input10AM.val();
  localStorage.setItem('stored10AM', tenAM) 
}



}

var   stored9AM = localStorage.getItem('stored9AM')
$("#input-9AM").val(stored9AM)

var   stored10AM = localStorage.getItem('stored10AM')
$("#input-10AM").val(stored10AM)

 

  
  
  // if (timeNow === "2PM"){
  //     $('#hour-2').attr("class", "present row time-block")
  //     $('#hour-3').attr("class", "future")
  //     $('#hour-10').attr("class", "future")
  //   }


  

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  saveItem.on("click", saveText9AM)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
});


