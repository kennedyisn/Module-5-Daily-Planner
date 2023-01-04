//This code shows the current time 
var today = moment();
// This line connects my code to the "currentDay"ID on line 30 and reformats is
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

var nineamTodo = $('textarea[name="9AM"]')
var tenamTodo = $('textarea[name="10AM"]')
var elevenamTodo = $('textarea[name="11AM"]')
var twelvepmTodo = $('textarea[name="12PM"]')
var onepmTodo = $('textarea[name="1PM"]')
var twopmTodo = $('textarea[name="2PM"]')
var threepmTodo = $('textarea[name="3PM"]')
var fourpmTodo = $('textarea[name="4PM"]')
var fivepmTodo = $('textarea[name="5PM"]')

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

  var todoInfo = $('textarea')
  // Loop through checked options to store in array
  $('textarea').each(function () {
    localStorage.setItem($(this).attr("name"),$(this).val());
  });
}


//Code to pull our previously saved information from the local storage
$('textarea[name="9AM"]').val(localStorage.getItem("9AM"));
$('textarea[name="10AM"]').val(localStorage.getItem("10AM"));
$('textarea[name="11AM"]').val(localStorage.getItem("11AM"));
$('textarea[name="12PM"]').val(localStorage.getItem("12PM"));
$('textarea[name="1PM"]').val(localStorage.getItem("1PM"));
$('textarea[name="2PM"]').val(localStorage.getItem("2PM"));
$('textarea[name="3PM"]').val(localStorage.getItem("3PM"));
$('textarea[name="4PM"]').val(localStorage.getItem("4PM"));
$('textarea[name="5PM"]').val(localStorage.getItem("5PM"));

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

$('.fa-save').on("click",savedTodoInfo)
