// Ejercicios de funciones.

//Punto 1.
function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log("La edad ingresada es 19, igual a: ", esMayorEdad(19));
// si la edad ingresada es mayor a 18, entonces arrojara como resultado True.

console.log("La edad ingresada es 7, igual a: ", esMayorEdad(7));
// si la edad ingresada es menor a 18, entonces arrojara como resultado False.

//Punto 2.
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}
let base = prompt("Ingrese el valor de la base");
let altura = prompt("Ingrese el valor de la base");
let area = calcularAreaRectangulo(base, altura);
console.log("El valor del area del rectangulo es igual a: ", area);
// Esta funcion imprimirá el área del rectángulo, multiplicando la base por la altura.
//Solicita al usuario que ingrese las medidas de la base para realizar el calculo del area.

//Punto 3.
function esPalindromo(cadena) {
  let cadenaReversa = cadena.split("").reverse().join("");
  return cadena === cadenaReversa;
}
let cadena1 = "Auto";
let cadena2 = "radar";
console.log("La palabra utilizada fue Auto: ", esPalindromo(cadena1)); // Como la palabra no es un palindromo la funcion imprimira False.
console.log("La palabra utilizada fue radar: ", esPalindromo(cadena2)); // Como la palabra es un palindromo la funcion imprimira True.

//Punto 4.
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}
let numeroAleatorio = generarNumeroAleatorio();
console.log("Se imprimira un numero aleatorio del 1 al 10: ", numeroAleatorio);
// La funcion imprimirá un número entero aleatorio del 1 al 10.
