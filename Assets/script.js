//added variables to connect local storage to html text area in timeblocks
var input9AM = $("#input-9AM");
var input10AM = $("#input-10AM");
var input11AM = $("#input-11AM");
var input12PM = $("#input-12PM");
var input1PM = $("#input-1PM");
var input2PM = $("#input-2PM");
var input3PM = $("#input-3PM");
var input4PM = $("#input-4PM");
var input5PM = $("#input-5PM");
//added variable to connect to buttons on each timeblock
var saveItem = $(".saveBtn");
//created variables to display current date from day.js on the page
var currentDay = $("#currentDay");

var now = dayjs().format("dddd, MMMM D");
currentDay.text(now);
//created variable to bring current time from day.js into js
var timeNow = dayjs().format("hA");
//created an array to iterate through
var dayTimes = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
//created for loop to iterate through all hours of workday
$(function () {
  for (let index = 0; index < dayTimes.length; index++) {
    var eachTime = $(`#${dayTimes[index]}`);
    eachTime.attr("class", "past row time-block");

    //created if statement to compare current time with all hours of workday
    if (timeNow === dayTimes[index]) {
      eachTime.attr("class", "present row time-block");
    } else if (timeNow === dayTimes[index - 1]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 2]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 3]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 4]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 5]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 6]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 7]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 8]) {
      eachTime.attr("class", "future row time-block");
    } else if (timeNow === dayTimes[index - 9]) {
      eachTime.attr("class", "future row time-block");
    }
  }
  // created function to be triggered by event listener/button click, that will store
  // input text in local storage
  function saveText9AM(event) {
    event.preventDefault();

    if (this.id === "button-9AM") {
      var nineAM = input9AM.val();
      localStorage.setItem("stored9AM", nineAM);
    } else if (this.id === "button-10AM") {
      var tenAM = input10AM.val();
      localStorage.setItem("stored10AM", tenAM);
    } else if (this.id === "button-11AM") {
      var elevenAM = input11AM.val();
      localStorage.setItem("stored11AM", elevenAM);
    } else if (this.id === "button-12PM") {
      var twelvePM = input12PM.val();
      localStorage.setItem("stored12PM", twelvePM);
    } else if (this.id === "button-1PM") {
      var onePM = input1PM.val();
      localStorage.setItem("stored1PM", onePM);
    } else if (this.id === "button-2PM") {
      var twoPM = input2PM.val();
      localStorage.setItem("stored2PM", twoPM);
    } else if (this.id === "button-3PM") {
      var threePM = input3PM.val();
      localStorage.setItem("stored3PM", threePM);
    } else if (this.id === "button-4PM") {
      var fourPM = input4PM.val();
      localStorage.setItem("stored4PM", fourPM);
    } else if (this.id === "button-5PM") {
      var fivePM = input5PM.val();
      localStorage.setItem("stored5PM", fivePM);
    }
  }
  // created methods to retrieve stored input in each timeblock
  var stored9AM = localStorage.getItem("stored9AM");
  $("#input-9AM").val(stored9AM);

  var stored10AM = localStorage.getItem("stored10AM");
  $("#input-10AM").val(stored10AM);

  var stored11AM = localStorage.getItem("stored11AM");
  $("#input-11AM").val(stored11AM);

  var stored12PM = localStorage.getItem("stored12PM");
  $("#input-12PM").val(stored12PM);

  var stored1PM = localStorage.getItem("stored1PM");
  $("#input-1PM").val(stored1PM);

  var stored2PM = localStorage.getItem("stored2PM");
  $("#input-2PM").val(stored2PM);

  var stored3PM = localStorage.getItem("stored3PM");
  $("#input-3PM").val(stored3PM);

  var stored4PM = localStorage.getItem("stored4PM");
  $("#input-4PM").val(stored4PM);

  var stored5PM = localStorage.getItem("stored5PM");
  $("#input-5PM").val(stored5PM);

  // created event listener to trigger local storage function upon click of
  // buttons on each timeblock
  saveItem.on("click", saveText9AM);
});
