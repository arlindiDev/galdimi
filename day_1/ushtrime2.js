document.getElementById("proccess").addEventListener("click", okButtonClicked);

function okButtonClicked() {
	var number1 = document.getElementById("input").value;
    var number2 = document.getElementById("input").value;

       if (number1 < number2) {
        console.log("numri 2 eshte ma i madh se numri 1");

} else if (number1 > number2) {
        console.log("numri 1 eshte ma i madh se numri 1 ")
        
} else if (number1 == number2) {
        console.log("numrat jane te barabarta")
    }


}