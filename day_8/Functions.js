function multiplyByTwo(n, callback) {
    var result = n * 2;
    callback(result);
  }
  
  function logResult(result) {
    console.log(result);
  }
  
  multiplyByTwo(5, logResult);