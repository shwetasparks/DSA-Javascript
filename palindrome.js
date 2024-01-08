function palindrome(n) {
  //extraction of a number
  let originalNum = n;
  let reverseNum = 0;
  //reverse num by extracting last digit
  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    // do reverse
    reverseNum = reverseNum * 10 + lastDigit;
  }
  //compare
  if (originalNum === reverseNum) {
    return true;
  }
  return false;
}
console.log(palindrome(7));
