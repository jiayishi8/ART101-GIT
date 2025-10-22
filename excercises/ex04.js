// Start by creating a variable to keep track of how many times the button is clicked.
let count = 0;
// Find the element with the id "needy-button" and tell it what to do when it's clicked.
$("#needy-button").click(function() {
  // Each time the button is clicked, increase the count by 1.
  count = count + 1;
  // Change the button’s text to show how many times it’s been clicked.
  $("#needy-button").html("You clicked me " + count + " times");
});
