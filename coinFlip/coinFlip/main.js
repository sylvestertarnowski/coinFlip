/* Function to update variable every time there is a change to it in the
input field. Then take the value and return coin flips and their total number
on the respective side */

function coinFlip() {
  var numberOfFlips = 10;
  for (var n = 1; n <= numberOfFlips; n++) {
    var x = Math.random();
    if (x < 0.5) {
      console.log("T");
    } else {
      console.log("H");
    }
  }
}
