/* Function to update variable every time there is a change to it in the
input field. Then take the value and return coin flips and their total number
of the each side. */

function clearBox() {
  document.getElementById("results").innerHTML = "";
}

// function that flips the coin, and prints the values
function coinFlip() { //called by pressing a button id "flip"
  var numberOfFlips = document.getElementById("howmany").value;
  for (var n = 1; n <= numberOfFlips; n++) {
    var x = Math.random();
    if (x < 0.5) {
      document.getElementById("results").textContent += "T";
    } else {
      document.getElementById("results").textContent += "H";
    }
  }
}
/* This function will filter out T from the string of T and H created by
a coinFlip(). Then it will count the amount of T (check the length of a string
that resulted from removing the opposite coin flip value). */
function countHeads(heads) {
  var heads = document.getElementById("results").textContent;
  /* Using regular expression here to replace all T (tails) with nothing,
  this basically removing all instances of T. This is done with global flag */
  heads = heads.replace(/T/g, "");
  document.getElementById("headscount").innerHTML = "Heads count: " + heads.length;
}
// This has the same functionality as countHead, but for Tails instead (filter out H)
function countTails(tails) {
  var tails = document.getElementById("results").textContent;
  tails = tails.replace(/H/g, "");
  document.getElementById("tailscount").innerHTML = "Tails count: " + tails.length;
}
/* This jQuerry function on first iteration adds a class .theflip to the 
div with id #thecoin. That class has css animation tied to it, so when 
user clicks on #thecoin button, animation executes. To ensure animation
plays every time user clicks on the coin, it first removes the said class,
and then waits 30 miliseconds before adding the class to prevent animation
from not playing. */
$("#thecoin").on('click', function() {
  $("div#thecoin").removeClass("theflip");
  setTimeout(function() {$("div#thecoin").addClass("theflip")}, 30);
});

