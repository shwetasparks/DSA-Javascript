function factor(n) {
  //take empty array
  let sortedFactors = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    //to get factor upto root n
    if (n % i === 0) {
      sortedFactors.push(i);
    }
    //to get other half
    if (n / i !== i) {
      sortedFactors.push(n / i);
    }
  }
  //sorting array
  return sortedFactors.sort();
}
//sort and print in ascending order
console.log(factor(12).sort((a, b) => a - b));
