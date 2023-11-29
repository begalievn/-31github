function findWordsContaining(words, x) {
  const result = [];
  words.map((word, index) => {
      if(word.includes(x)) {
          result.push(index);
      }
  })

  return result;
};