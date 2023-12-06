function totalMoney(n: number): number {
  let result = 0;
  let currentRate = 1;
  for(let i = 0; i < n; i++) {
      if (i % 7 === 0 && i !== 0) {
          ++currentRate;
      } 
      const adding = (i % 7) + currentRate;
      result += adding;
  }

  return result;
};