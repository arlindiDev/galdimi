function sumAll() {
    var sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  sum = sumAll(1,2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(sum);