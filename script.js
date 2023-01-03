//This code shows the current time 
var today = moment();
// This line connects my code to the "currentDay"ID on line 30 and reformats is
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

var nineamTodo = $('input[name="9AM"]')
var tenamTodo = $('input[name="10AM"]')
var elevenamTodo = $('input[name="11AM"]')
var twelvepmTodo = $('input[name="12PM"]')
var onepmTodo = $('input[name="1PM"]')
var twopmTodo = $('input[name="2PM"]')
var threepmTodo = $('input[name="3PM"]')
var fourpmTodo = $('input[name="4PM"]')
var fivepmTodo = $('input[name="5PM"]')

function savedTodoInfo(event) {
  // Prevent the default behavior
  event.preventDefault(); 

  console.log('At 9 AM I have to: ', nineamTodo.val());
  console.log('At 10 AM I have to: ', tenamTodo.val());
  console.log('At 11 AM I have to: ', elevenamTodo.val());
  console.log('At 12 PM I have to: ', twelvepmTodo.val());
  console.log('At 1 PM I have to: ', onepmTodo.val());
  console.log('At 2 PM I have to: ', twopmTodo.val());
  console.log('At 3 PM I have to: ', threepmTodo.val());
  console.log('At 4 PM I have to: ', fourpmTodo.val());
  console.log('At 5 PM I have to: ', fivepmTodo.val());

  var todoInfo = $('input:text')
  // Loop through checked options to store in array
  $.each(todoInfo, function () {
    localStorage.setItem($(this).val());
  });
}

//Code to pull our previously saved information from the local storage
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

//Creates function that will turn each timeblock id from a string into a number
$('.hour').each(function() {
  var currenttimehrs = moment().hour();
  var timeblock = $(this).attr("id");
  // Creates timeblock varable to be used in statement
  //console log both of these variables so they can be referred to as objects in my loop
  console.log(timeblock)
  console.log(currenttimehrs)

  if (currenttimehrs > timeblock) {
    //add class to text area for .past, take away all other class to minimize confusion
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
  } 
  else if (currenttimehrs < timeblock) {
    //add class to text area for .future, take away all other class to minimize confusion
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  } 
  else {
    //add class to text area for .present, take away all other class to minimize confusion
    $(this).addClass('present');
    $(this).removeClass('past');
    $(this).removeClass('future');
  }
});