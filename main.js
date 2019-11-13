const reader = require('readline-sync');
const utils = require('./utils');

const n1 = reader.questionInt("Please insert a positive number = ");
const n2 = reader.questionInt("Please insert a positive number = ");

function primes(a, b) {
  if(a > 0 && b > 0){
    let primeNumbers = [];

    for(let i = a; i <= b; i++){
      if(utils.isPrime(i)){
        primeNumbers.push(i)
      }
    }
    if(primeNumbers.length){
      return primeNumbers;
    }else{
      return "there are no prime numbers in the interval";
    }
  }else{
    return "both numbers should be positive";
  }
}

let val = primes(n1,n2);
util.printArrayElements(val);