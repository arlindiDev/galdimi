 /* function halili (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result += base;
    }
    return result;
  };
  
  console.log(halili(2, 10)); */

 

 

  


  const power = (base, exponent) => {
    let result = 1;
    for (let i= 0; i < exponent; i++) {
      result += base;
    }
    return result;
  };
  console.log(power(2, 10));

// 

  const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(2));
console.log(square2(2));
//


function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10, 0));
// → -10
console.log(minus(10, 5));


function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10