//Ejercicios de Array, Objetos y Funciones.

//Punto 1
function determinarSigno(numero) {
  if (numero > 0) {
    return "El numero ingresado es positivo";
  } else if (numero < 0) {
    return "El numero ingresado es negativo";
  } else {
    return "El numero ingresado es igual a 0";
  }
}

let numero = parseFloat(prompt("Ingrese un numero: "));
let mensaje = determinarSigno(numero);
console.log(mensaje);

//Punto 2
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % 1 === 0) {
      return false;
    }
  }
  return true;
}
let numero = parseInt(prompt("Ingrese un numero: "));
let mensajes = esPrimo(num)
  ? "El numero ingresado es primo"
  : "El numero no es primo";
console.log(mensajes);

//Punto 3
function convertirTemperatura(temperatura, unidad) {
  if (unidad === "C") {
    let temperaturaFahrenheit = (temperatura * 9) / 5 + 32;
    return temperaturaFahrenheit.toFixed(2) + "°F";
  } else if (unidad === "F") {
    var temperaturaCelsius = ((temperatura - 32) * 5) / 9;
    return temperaturaCelsius.toFixed(2) + "°C";
  } else {
    return "Unidad de temperatura invalida.";
  }
}
let temperatura = parseFloat(prompt("Ingrese la temperatura: "));
let unidad = prompt("Ingrese la temperatura (C / celsius, F / fahrenheit)");
let resultado = convertirTemperatura(temperatura, unidad);
console.log(resultado);
