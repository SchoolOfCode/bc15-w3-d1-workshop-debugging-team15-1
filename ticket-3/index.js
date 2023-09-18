function countNumberOfNinesInNumber(number) {
  let count = 0;
  let digit = number.toString()

  for (let i = 0; i < digit.length; i++) {
    if ("9" === digit[i]) {
      count++;
    }
  }
return count;
}

console.log(countNumberOfNinesInNumber(999))