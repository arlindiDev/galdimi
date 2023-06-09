 function halili (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(halili(2, 10));

  // 1- 1*2 -> count = 0
  // 2*2 = 4-> count = 1
  // 4*2 8 -> count = 2
  // 8*2 16 -> count = 3
  // 16*2 -> count = 4
  // 5 - 32*2 -> count = 5
  // 64*2 -> count = 6
  // 128*2 -> count = 7
  // 256*2 -> count = 8
  // 512*2 -> count = 9
  // 1024 -> count = 10