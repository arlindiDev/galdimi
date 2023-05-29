
function execute() {
  var size = document.getElementById('input').value;
  let string = "";
  for (let i = 1; i <= size; i++) {
    string += "\n";
    for (let j = 0; j < i; j++) {
      string += "*";
    }

  }
  console.log(string);
}

// first comes the function that is called in the html doc
// we declare a variable that is given by the user
// we declare an empty string variable which will take the star value inside the for loop
// first for loop is for the columns of the stars
// the inner loop is for how many times the stars are executed this is executed first
// size = 5,

// size = 5, |first loop i = 1 < 5, true | second loop j = 0 < 1, true | execute star | then come back to inner loop
// j = 1 < 1, false | leave inner loop go to outer loop | string = new line
// 