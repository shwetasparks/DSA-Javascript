function armstrong(n) {
  let originalNum = n;
  let sum = 0;

  // Extraction of digits
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    sum = sum + lastDigit ** 3;
  }

  // Check if it's an Armstrong number
  if (sum === originalNum) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrong(92727));
