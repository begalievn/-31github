function sumOfSquares(nums) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
      if (nums.length % (i+1) === 0) {
          result += nums[i]**2;
      }
  }

  return result;
};