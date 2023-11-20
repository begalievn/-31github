function sortVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const indices = [];
  const vowelsInS = [];

  for(let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i].toLowerCase())) {
          vowelsInS.push(s[i]);
          indices.push(i);
      }
  }

  vowelsInS.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  const letterArr = s.split('');
  for(let i = 0; i < vowelsInS.length; i++) {
      letterArr[indices[i]] = vowelsInS[i]; 
  }

  return letterArr.join('');
};