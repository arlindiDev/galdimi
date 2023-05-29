var Numbers = [5, -9, 1, 24, -2, 54, -12, 8, -10, -72, -100];

const reversedArray = []

for(let i = Numbers.length - 1; i >= 0; i--) {
  const valueAtIndex = Numbers[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

// first we create an empty array to push the elements from the Numbers array
// in the for loop we declare a counter with length - 1 to take the last element 
// condition i > = 0 so that it takes the last and first element and decrement 
// declare a variable to put all the elements from last to first
// Push method to put these elements in the newly created array 