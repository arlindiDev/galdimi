class Car {
  constructor(name, year) {
    this.year = year,
    this.name = name
  }

  age(x) {
    return x - this.year
  }
  
}


const myCar = new Car('BMW', 2015) // Instance e objektit Car 

console.log('My car is this ' + myCar.age(year) + ' years old')



function area(width, height,) {
  return width * height;
}

console.log(area(3, 5));
