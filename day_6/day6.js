// 2 2
// 2 2

// 3 3 3
// 3 3 3 
// 3 3 3

function execute() {
	var size = document.getElementById('input').value;

	for ( var k = 0; k < size; k ++) {
		var row = "";

		for(var i = 0; i < size; i++) {
			row = row + " " + size;
		}

		console.log(row)
	}
}

