
document.getElementById("proccess").addEventListener("click", okButtonClicked);

function okButtonClicked() {
	var input = document.getElementById("input").value;

if(input == 1) {
		document.getElementById("result").value = "Janari";
} else if (input == 2){
	document.getElementById("result").value = "Shkurti";
}
}


