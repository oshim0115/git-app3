function dosomething(a, b, callback){
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus (a, b) {
  return a + b;
}

dosomething(4, 5, multiply);
dosomething(10, 40, plus);