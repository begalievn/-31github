function sumIndicesWithKSetBits(nums, k) {
  let result = 0;

  for(let i = 0; i < nums.length; i++) {
      const countOfBits = [...i.toString(2)].filter((el) => el === '1').length;
      console.log(nums[i], countOfBits, [...nums[i].toString(2)]);
      if (countOfBits === k) result += nums[i];
  }

  return result;
};