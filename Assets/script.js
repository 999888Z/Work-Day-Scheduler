// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var input9AM = $('#input-9AM')
var save9AM = $('#button-9AM')
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

var  nineAM = input9AM.val();
console.log(nineAM)

localStorage.setItem('stored9AM', nineAM)
}

var   stored9AM = localStorage.getItem('stored9AM')
$("#input-9AM").val(stored9AM)


 

  
  
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
  save9AM.on("click", saveText9AM)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
});


// btn9AM.addEventListener("click", );
// localStorage.setItem("email", email);
// localStorage.setItem("user", JSON.stringify(user));

//  // create user object from submission
//  var user = {
//   firstName: firstNameInput.value.trim(),
//   lastName: lastNameInput.value.trim(),
//   email: emailInput.value.trim(),
//   password: passwordInput.value.trim()
// };

// // set new submission to local storage 
// localStorage.setItem("user", JSON.stringify(user));

// // Clear todoList element and update todoCountSpan
// todoList.innerHTML = "";
// todoCountSpan.textContent = todos.length;

// var todos = [];

// // The following function renders items in a todo list as <li> elements
// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

  // // Add new todoText to todos array, clear the input
  // todos.push(todoText);
  // todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();

