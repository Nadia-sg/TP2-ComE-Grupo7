
/////////////TP2_GINART_MATAYOSHI_VIZGARRA///////////////////////////////////////////////////////
/////////////1. Calcular el área de un rectángulo////////////////////////////////////////////////

function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

console.log("Solución 1- Ejemplo 1");
console.log(calcularAreaRectangulo(5, 3));

console.log("Solución 1- Ejemplo 2");
console.log(calcularAreaRectangulo(12, 24));

console.log("Solución 1- Ejemplo 3");
console.log(calcularAreaRectangulo(8, 20));

/* Creo una función que recibe dos parámetros: el ancho y el alto. Agrego return ya que la consigna pide
   que retorne un valor, de esta forma en caso de requerirse puede ser utilizado este valor nuevamente
   lo cual no sería posible si solo se imprimiera el valor con console.log. Para calcular el área de un
   rectángulo es necesario multiplicar ancho por alto. Llamo a la función con diferentes valores y 
   mostramos el resultado en la consola.*/





/////////////2. Contar palabras en una cadena/////////////////////////////////////////////////////

function contarPalabras(cadena) {
  let palabras = cadena.trim().split(/\s+/); 
  return palabras.length;
}

console.log("Solución 2- Ejemplo 1");
console.log(contarPalabras("Humahuaca es un lugar copado"));

console.log("Solución 2- Ejemplo 2");
console.log(contarPalabras("Una buena taza de café para      despertar"));

console.log("Solución 2- Ejemplo 3");
console.log(contarPalabras(" ¡Qué frío!"));

/* Uso cadena.trim() para eliminar espacios al principio o al final de la cadena, por si la persona puso espacios de más.
Uso el método split() que divide una cadena de texto en un array de subcadenas, utilizando un separador especificado, en este caso
el separador es (/\s+/) que representa cualquier tipo de espacio en blanco, y cualquier cantidad. Luego .length
devuelve cuántos elementos hay en el array resultante, es decir, cuántas palabras.*/ 


/////////////3. Contar vocales en una cadena///////////////////////////////////////////////////////

function contarVocales(cadena) {
  let contador = 0;
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";

  for (let letra of cadena) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log("Solución 3- Ejemplo 1");
console.log(contarVocales("Buenos Aires"));

console.log("Solución 3- Ejemplo 2");
console.log(contarVocales("Palmera"));

console.log("Solución 3- Ejemplo 3");
console.log(contarVocales("Hipopótamo"));

/* Creo la función para que reciba por parámetro una cadena de texto, que es a la cual se aplicará el contador.
 Creo una variable llamada contador, que va a ir sumando cada vocal encontrada, inicializa en cero.
 En la variable vocales incluyo todo lo que quiero contar, vocales mayúsculas y minúsculas, con y sin acento.
 Luego uso un bucle for para recorrer la cadena, si hay coincidencia el contador suma de a uno, así devuelve finalmente
 el total de vocales encontradas en la cadena*/
 


/////////////4. Encontrar el palíndromo////////////////////////////////////////////////////////////







/////////////5. Crear un programa para convertir la edad de un perro a años humanos/////////////////






/////////////6. Convertir la primera letra de cada palabra en mayúscula/////////////////////////////







/////////////7. Generar los primeros N números de la sucesión de Fibonacci///////////////////////////








//////////////8. Lista de Productos//////////////////////////////////////////////////////////////////








/////////////9. Estudiantes y Calificaciones////////////////////////////////////////////////////////










/////////////10. Películas//////////////////////////////////////////////////////////////////////////
