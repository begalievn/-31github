function groupAnagrams(strs) {
  const obj = {};
  for (let str of strs) {
      const sorted = str.split("").sort().join("");
      obj[sorted] ? obj[sorted].push(str) : obj[sorted] = [str];
  }

  return Object.values(obj);
};