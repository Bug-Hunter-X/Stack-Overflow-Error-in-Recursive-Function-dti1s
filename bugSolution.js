function foo(a, b) {
  if (a === 0) {
    return b; 
  } else if (a < 0 || a > 1000) { //Added condition to handle large inputs
    return Infinity; //or throw an error
  }
  return foo(a - 1, a + b); 
}