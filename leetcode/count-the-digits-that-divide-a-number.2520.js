function countDigits(num) {
  let result = 0;
  let curr = num;
  while (curr > 0) {
      let digit = curr% 10;
      if (num % digit === 0) {
          result++;
      }
      curr = Math.floor(curr / 10);
  }

  return result;
};