// //brute

// function prime(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log("prime");
//   } else console.log("not prime");
// }
// console.log(prime(5));

//optimized solution
function isPrime(n) {
  let count = 0;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 2) {
    return true;
  } else {
    return false;
  }
}
console.log(isPrime(2));
