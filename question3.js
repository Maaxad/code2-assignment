//how to calc prime nubers
function primeNumbers(numberList) {
    primes = []// to allow the numbers are place when the code finds prime numbers
    for (let no of numberList) {
      if (isPrime(no)) {
        primes.push(no);
  
      }
    }
    return primes;
  }
  function isPrime(no) {
    if (no < 2) return false; // 1 or less are not prime
    for (let i = 2; i <= Math.sqrt(no); i++) {//squre root to check whether a num is evenly divided by the num
      if (no % i == 0) 
      return false;
    }
    return true;
  }
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//the above code should give me only prime no when loged
  const primeResults = primeNumbers(numberList);
  
  
  console.log(primeResults);  // the output should be only prime numbers in the array