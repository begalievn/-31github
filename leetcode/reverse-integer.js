var reverse = function(x) {
  x = String(x);
  let res = '';

  for(let i = x.length-1; i >= 0; i--) {
      res += x[i];
  }
  let lastIndex = res.length - 1;
  if(res[lastIndex] == '-') {
    res = res.slice(0, -1);
    res = '-' + res;
  }
    
  const result = Number(res);
  if(result > 2 ** 31 || result < ((-2) ** 31)) {
      return 0;
  }
  
  return res;
}