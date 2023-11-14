function finalString(s) {
  const arr = [];
  for(let char of s) {
      if (char === 'i') {
          arr.reverse();
      } else {
          arr.push(char);
      }
  }

  return arr.join("");
};