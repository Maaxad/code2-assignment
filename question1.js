//an assending array creation 
function arrayGenerate(low, high){
    const steps = Math.sign(high - low);//...sign returns a number + or - depending on the number passed in the argument
    const length = Math.abs(Math.ceil((low - high) /steps)) + 1;//...ceil to avoid decimals numbers , ...to return absolute value 
    return Array.from({length}, (_,i) => low + (i * steps)); // length to creat an array with the reqred length. and calc the value of each position in the array
  }
console.log(arrayGenerate(4, 7));//outputs no from 4 to 7 
console.log(arrayGenerate(-4, 7));//outputs no from -4 to +7

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(swapCase('The Quick Brown Fox'));