const a1 = [1,2,3,4,5,6,7]
const a2 = [8,9,10,11,12,13]
//const a3 = a1.concat(a2, [14,15,16], 'Rennyson')

const a3 = [...a1,,'Rennyson',...a2]
console.log(a3)