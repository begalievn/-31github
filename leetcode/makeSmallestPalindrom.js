function makeSmallestPalindrome(s) {
  const len = s.length;
  const answer = new Array(len).fill('');

  for(let i = 0; i < len / 2; i++) {
      const rightIndex = len - i - 1;
      if (s[i] < s[rightIndex]) {
          answer[i] = s[i];
          answer[rightIndex] = s[i];
      } else {
          answer[i] = s[rightIndex];
          answer[rightIndex] = s[rightIndex];
      }
  }

  return answer.join('');
};