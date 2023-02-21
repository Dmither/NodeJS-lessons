const addition = (a, b) => {
  return a + b;
}

function subtraction(a, b){
  return a - b;
}


module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiplication: (a, b) => {
    return a * b;
  },
  division: (a, b) => {
    return a * b;
  },
}