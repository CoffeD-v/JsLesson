const nums = [3, 4, 5, 6, 7];
//Para multiplicar todos os valores em números:
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Numero final retornado 2520
