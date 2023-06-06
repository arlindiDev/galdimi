

var values = ["Galdim", "Arlind", "Hajdari"] // Array of String

// Int
// char
// Boolean
// Person


class Person {
	constructor(name, age, height){
	   	this.name = name
	    this.age = age
	    this.height = height
	} 

	sayMyName() {
		console.log("My name is " + this.name + ". I am " + this.age + " years old.")
	}

	isAdult() {
		return this.age >= 18
	}
}


var person = new Person("Galdim", 30, 178)
var person1 = new Person("Arlind", 29, 180)
var baby = new Person("Art", 1, 101)

var people = [person, person1, baby] // Array of Person

people[0] // Person
people[1] // Person
people[2] // Person
// ... Person


// iterate the people and print their names
for(var i = 0; i < 3; i++) {

	var personInArray = people[i]
	
	console.log(personInArray.name)
}


console.log( person1.isAdult() )
console.log( baby.isAdult() )

// Object datatype -> Person
// to create an Object use the keyword `new`