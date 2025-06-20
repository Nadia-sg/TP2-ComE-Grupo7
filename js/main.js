/////////////TP2_GINART_MATAYOSHI_VIZGARRA///////////////////////////////////////////////////////
/////////////1. Calcular el área de un rectángulo////////////////////////////////////////////////





/////////////2. Contar palabras en una cadena/////////////////////////////////////////////////////





/////////////3. Contar vocales en una cadena///////////////////////////////////////////////////////






/////////////4. Encontrar el palíndromo////////////////////////////////////////////////////////////
console.log("________________________________________________________________");
function esPalindromo(palabra) {
  const limpia = palabra.toLowerCase();
  const reversa = limpia.split("").reverse().join("");
  return limpia === reversa;
}

// Ejemplos
console.log("Solución 4 - Ejemplo 1");
console.log(esPalindromo("neuquen"));     // true
console.log("________________");
console.log("Solución 4 - Ejemplo 2");
console.log(esPalindromo("reconocer"));   // true
console.log("________________");
console.log("Solución 4 - Ejemplo 3");
console.log(esPalindromo("javascript"));  // false

/* 
Para resolver este ejercicio, primero pensé en qué es un palíndromo: una palabra que se lee igual al derecho que al revés. 
Entonces lo primero que se me ocurrió fue convertir el string a minúsculas para evitar errores por diferencias entre mayúsculas y minúsculas.
Luego, utilicé los métodos split, reverse y join para obtener la palabra al revés, y simplemente comparé si la original y la invertida eran iguales.
*/

/////////////5. Crear un programa para convertir la edad de un perro a años humanos/////////////////
console.log("________________________________________________________________");
function edadCanina() {
  const edad = prompt("¿Cuántos años tiene tu perro?");
  const edadHumana = edad * 7;
  console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

// Ejecutar tres veces con distintos valores
console.log("Solución 5 - Ejemplo 1");
edadCanina(); // Prueba 1
console.log("________________");
console.log("Solución 5 - Ejemplo 2");
edadCanina(); // Prueba 2
console.log("________________");
console.log("Solución 5 - Ejemplo 3");
edadCanina(); // Prueba 3

/* 
Este ejercicio requiere interacción con el usuario, así que utilicé prompt para pedir la edad del perro.
Después multipliqué ese valor por 7, como indica la consigna, para obtener la edad en años humanos.
Finalmente, usé console.log para mostrar el mensaje requerido. 
*/

/////////////6. Convertir la primera letra de cada palabra en mayúscula/////////////////////////////
console.log("________________________________________________________________");
function capitalizarPalabras(cadena) {
  return cadena
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}

// Ejemplos
console.log("Solución 6 - Ejemplo 1");
console.log(capitalizarPalabras("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"
console.log("________________");
console.log("Solución 6 - Ejemplo 2");
console.log(capitalizarPalabras("esto es una prueba"));// "Esto Es Una Prueba"
console.log("________________");
console.log("Solución 6 - Ejemplo 3");
console.log(capitalizarPalabras("buenas noches"));// "Buenas Noches"

/* 
En este ejercicio pensé que la mejor forma de abordar el problema era dividir la cadena en palabras usando split(" ").
Luego, a cada palabra le puse la primera letra en mayúscula usando charAt(0).toUpperCase() y le concatené el resto con slice(1).
Después, uní todas las palabras de nuevo con join(" ") para obtener la frase capitalizada.
Usé map para aplicar la transformación a cada palabra de forma funcional y elegante.
*/

/////////////7. Generar los primeros N números de la sucesión de Fibonacci///////////////////////////
console.log("________________________________________________________________");
function fibonacci(n) {
  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia.slice(0, n);
}

// Ejemplos
console.log("Solución 7 - Ejemplo 1");
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log("________________");
console.log("Solución 7 - Ejemplo 2");
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("________________");
console.log("Solución 7 - Ejemplo 3");
console.log(fibonacci(1));  // [0]

/* 
Para este ejercicio, pensé en la definición de la sucesión de Fibonacci: comienza con 0 y 1, 
y cada número siguiente es la suma de los dos anteriores. 
Entonces inicialicé un array con los primeros dos valores [0, 1], y a partir del índice 2 fui agregando los nuevos elementos.
Usé un for loop que llega hasta n, y al final devolví solo los primeros n elementos, por si n es menor que 2.
Probé la función con distintos tamaños de secuencia y funcionó correctamente.
*/


//////////////8. Lista de Productos//////////////////////////////////////////////////////////////////








/////////////9. Estudiantes y Calificaciones////////////////////////////////////////////////////////










/////////////10. Películas//////////////////////////////////////////////////////////////////////////