// Exercise
// Kur i eshte i plotpjestueshem vetem me 3 printo Fizz
// Kur i eshte i plotpjestueshem vetem me 5 printo Buzz
// Kur i eshte i plotpjestueshem me 3 dhe 5 printo FizzBuzz


for (var i = 1; i <= 20; i++) {
	// LOOP FROM HERE
	// nese i = 2 printohet Fizz, mos kqyr mo 
	// nese i = 5 printohet veq Buzz, mos e kqyr mo
	// nese i = 10 printohet veq FizzBuzz, mos e kqyr mo
	//  i = 7 



	if (i % 3 == 0 && i % 5 == 0) {
		console.log(i + " FizzBuzz");
		
	}

	else if (i % 5 == 0) {
		console.log(i + " Buzz");
	}

	else if ( i % 3 == 0) {
		console.log(i + " Fizz");
	}
	// LOOP TO HERE
}

//2 Fizz
//4 Fizz
//5 Buzz
//6 Fizz
//8 Fizz
//10 FizzBuzz
//12 Fizz
//14 Fizz
//15 Buzz

console.log("DONE kushti false");
// i = 1 | true | false |
// i = 2 | true | true  | 2

// i = 10 | true | true  | 10 | 10
// i = 10 | true | 