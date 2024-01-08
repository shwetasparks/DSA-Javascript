function reverse(n) {
  let reverseNum = 0;
  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    reverseNum = reverseNum * 10 + lastDigit;
  }
  return reverseNum;
}
console.log(reverse(7789));
//9877
