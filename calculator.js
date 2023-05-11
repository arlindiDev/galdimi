
var buttons = document.getElementById("buttons");
var lastClickedNumber = "number1";

document.getElementById("number1").addEventListener("click",lastClickedNumber1);
function lastClickedNumber1(){
  lastClickedNumber = "number1";
}

document.getElementById("number2").addEventListener("click",lastClickedNumber2);
function lastClickedNumber2(){
  lastClickedNumber = "number2";
}


for(var i = 1; i <= 9; i++ ) {
  buttons.innerHTML += "<input id=\"button"+ i +"\" type=\"button\" value = \""+ i +"\">" 
}

for(var i = 1; i <= 9; i++ ){
  var id = "button"+ i;
  var button = document.getElementById(id);
  button.addEventListener("click", (event) => {  
    var numri = document.getElementById(event.srcElement.id).value;
    appendNumberToInput(numri);
    calculate();
  });
}


document.getElementById("plus").addEventListener("click",plus);

function plus() {
  document.getElementById("operator").innerHTML = "+";
}

document.getElementById("subtract").addEventListener("click",subtract);

function subtract() {
  document.getElementById("operator").innerHTML = "-";
}

document.getElementById("multiply").addEventListener("click",multiply);

function multiply() {
  document.getElementById("operator").innerHTML = "x";
}

document.getElementById("divide").addEventListener("click",divide);

function divide() {
  document.getElementById("operator").innerHTML = "/";
} 
  


function appendNumberToInput(numberToShow) {
  document.getElementById(lastClickedNumber).value += numberToShow;
}

document.getElementById("number1").addEventListener("change", (event) => { 
  
  calculate();
  
});

 document.getElementById("number2").addEventListener("change", (event) => { 
   calculate();
  });

  function calculate(){

    // inputin e number1 value 
    // inputin e number2 value 
    // tani e merr operatorin 
    // if statement me kqyr qka osht 
    // tani me kalkulu vlerat rezultatin
  
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number1Integer = Number(number1);
   var number2Integer = Number(number2);

   var operator = document.getElementById("operator").innerHTML;

   if (operator == "+") {
    var result = number1Integer + number2Integer;}

    else if (operator == "-") {
      var result = number1Integer - number2Integer;}

      else if (operator == "/") {
        var result = number1Integer / number2Integer;}

        else  {
          var result = number1Integer * number2Integer;}
  
    document.getElementById("result").innerHTML = result;
  }
  function reset()
{
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
document.getElementById("result").value = "";
}