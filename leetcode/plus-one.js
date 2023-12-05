function plusOne(digits) {
  let index = digits.length - 1;
  let condition = true;
  while(condition) {
      if(digits[index] + 1 < 10) {
          digits[index]++;
          condition = false;
      }else {
          digits[index] = 0;
          if(index === 0) {
              digits = [1, ...digits];
              condition = false;
          } else {
              index--;
          }
      }
  }
  
  return digits;
};