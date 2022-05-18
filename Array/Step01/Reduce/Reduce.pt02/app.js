const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// Uma abordagem para encontrar o máximo usando reduzir:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// Uma versão mais curta usando Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
// Encontrar o valor minimo usando o Math.min:
const minGrade = grades.reduce((min, currVal) => (
  //utilizando o retorno implícito para o bem da variedade
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// Podemos especificar um valor inicial como o 2º argumento a reduzir:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum começa em 1000, depois cada elemento é adicionado a ele
