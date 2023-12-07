function largestOddNumber(num: string): string {
  for(let i=num.length-1;i>=0;i--){
      if(isDigitOdd(i, num)){
          return num.slice(0,i+1);
      }
  }
  return "";
};

const isDigitOdd = (index: number, num: string): boolean => {
  return Number(num[index]) % 2 !== 0;
};