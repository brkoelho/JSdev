//              0    1   2    3    4    5     ---> Array de 6 só tem até o 5 (i-1).
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]

console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[600]);

notas[4] = 8.7;

console.log(notas); // O notas que é constante não os elementos.