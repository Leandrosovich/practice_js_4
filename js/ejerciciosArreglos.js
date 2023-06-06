//Ejercicios de Arreglos

//Punto 1.
function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
let arreglo = [4, 6, 25, 40, 41];
let suma = obtenerSuma(arreglo);
console.log("La suma de los elementos del arreglo da como resultado: ", suma);
// La funcion imprimirá la suma de los elementos del arreglo.

//Punto 2.
function obtenerPares(numeros) {
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 25, 30];
let pares = obtenerPares(numeros);
console.log(pares);
// Imprimirá [2, 4, 6, 8, 10, 12, 30]

//Punto 3.
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos deben tener como valor la misma longitud");
  }

  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }
  let promedioPonderado = sumaNotas / sumaPesos;
  return promedioPonderado;
}

let notas = [45, 71, 88, 97];
let pesos = [0.4, 0.3, 0.2, 0.1];
let promedio = obtenerPromedioPonderado(notas, pesos);

console.log("El promedio ponderado de las notas es equivalente a: ", promedio);
// La funcion imprimirá el promedio ponderado entre los pesos y las notas.}

//Punto 4.
function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}
let numero = [777, 222, 999, 111, 666];
let maximo = obtenerMaximo(numero);
console.log("El elemento de valor maximo sera impreso en pantalla: ", maximo);
// La funcion imprimirá el valor 999, ya que es el elemento de mas valor (Debe imprimir el valor maximo) dentro del arreglo.
