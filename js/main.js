/////////////TP2_GINART_MATAYOSHI_VIZGARRA///////////////////////////////////////////////////////
/////////////1. Calcular el área de un rectángulo////////////////////////////////////////////////





/////////////2. Contar palabras en una cadena/////////////////////////////////////////////////////





/////////////3. Contar vocales en una cadena///////////////////////////////////////////////////////






/////////////4. Encontrar el palíndromo////////////////////////////////////////////////////////////







/////////////5. Crear un programa para convertir la edad de un perro a años humanos/////////////////






/////////////6. Convertir la primera letra de cada palabra en mayúscula/////////////////////////////







/////////////7. Generar los primeros N números de la sucesión de Fibonacci///////////////////////////








//////////////8. Lista de Productos//////////////////////////////////////////////////////////////////
console.log("________________________________________________________________");

const productos = [
 { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
 { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
 { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
 { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
 { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio

console.log("Solución 8 - Punto 1");
console.log("Usando forEach: Mostrar en consola cada producto con su nombre y precio");

productos.forEach(p => console.log(`${p.nombre}: $${p.precio}`));

console.log("________________");

/* 
usé el método forEach para recorrer el array de productos
en cada iteración muestro en consola el nombre y el precio de cada producto.
se ejecuta asií una acción sin crear un nuevo array
*/

// 2. Usando map: Crear un array con solo los nombres de los productos

console.log("Solución 8 - Punto 2");
console.log("Usando map: Crear un array con solo los nombres de los productos");

const nombres = productos.map(p => p.nombre);
console.log("Nombre de los productos: ", nombres);

console.log("________________");

/*
con el método map en este ejercicio genero un nuevo array que contiene solo los nombres de los productos
Map va a recorrer el array original y devuelver un nuevo array con el resultado de aplicar la función a cada elemento
en este caso extraje el campo nombre de cada objeto
*/

// 3. Usando filter: Obtener producto electrónicos con stock mayor a 20

console.log("Solución 8 - Punto 3");
console.log("Usando filter: Obtener producto electrónicos con stock mayor a 20");

const electronicosConStock = productos.filter(p => p.categoria === 'electrónica' && p.stock > 20);
console.log("Productos con stock mayor a 20: ", electronicosConStock);

console.log("________________");

/* 
usé filter para obtener solo los productos de categoría electrónica que además tienen un stock mayor a 20
este método me permite crear un nuevo array con los elementos que cumplen con esa condición específica
*/

// 4. Usando find: Encontrar el producto con id 3

console.log("Solución 8 - Punto 4");
console.log("Usando find: Encontrar el producto con id 3");

const productoId3 = productos.find(p => p.id === 3);
console.log("Producto con id = 3: ", productoId3);

console.log("________________");

/* 
en este ejercicio con el método find busco el primer producto cuyo id sea igual a 3
Find va a retornar el primer elemento que cumple con la condición o undefined si no encuentra ninguno
*/

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)

console.log("Solución 8 - Punto 5");
console.log("Usando reduce: Calcular el valor total del inventario (precio * stock)");

const totalInventario = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log("Valor total del inventario: ", totalInventario);


/* 
Reduce me permite acumular valores y en este caso lo usé para calcular el valor total del inventario
lo que hice fue multiplicar el precio por el stock de cada producto y voy sumando en una variable acumuladora
*/



/////////////9. Estudiantes y Calificaciones////////////////////////////////////////////////////////
console.log("________________________________________________________________");


const estudiantes = [
 { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
 { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
 { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
 { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante

console.log("Solución 9 - Punto 1");
console.log("Usando forEach: Mostrar nombre y edad de cada estudiante");

estudiantes.forEach(e => console.log(`Estudiante: ${e.nombre}, Edad: ${e.edad}`));

console.log("________________");

/* 
en este ejercicio utilicé forEach porque necesitaba recorrer el array sin transformarlo
la consigna pedía mostrar nombre y edad de cada estudiante
así que decidí usar una función flecha dentro del forEach para imprimir directamente la información 
*/


// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones

console.log("Solución 9 - Punto 2");
console.log("Usando map: Crear array de objetos con nombre y promedio de calificaciones");

const promedios = estudiantes.map(e => {
  const promedio = e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length;
  return { nombre: e.nombre, promedio };
});
console.log(promedios);

console.log("________________");

/*
para este ejercicio usé map, me permitió transformar el array original en otro array con la estructura que quiera
en este caso, necesitaba obtener un nuevo array que contuviera solo el nombre del estudiante y su promedio de calificaciones
pensé en usar reduce dentro del map para sumar las notas y luego dividirlas por la cantidad de elementos. el resultado fue un array
más simple y directo. me pareció una forma muy clara y ordenada de calcular promedios
*/


// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5

console.log("Solución 9 - Punto 3");
console.log("Usando filter: Obtener estudiantes con promedio mayor a 7.5");

const destacados = promedios.filter(e => e.promedio > 7.5);
console.log(destacados);

console.log("________________");

/*
en este punto como ya tenía el array con promedios creado utilicé filter para quedarme con los estudiantes cuyo promedio era mayor a 7.5
este método devuelve un nuevo array con solo los elementos que cumplen la condición
decidí mantener el código separado del punto anterior para que se vea la relación entre ambos y cómo se puede encadenar el trabajo entre métodos
(map seguido de filter). me pareció una buena forma de practicar cómo reutilizar estructuras ya creadas
*/



// 4. Usando find: Encontrar estudiante llamado 'María'

console.log("Solución 9 - Punto 4");
console.log("Usando find: Encontrar estudiante llamado 'María'");

const maria = estudiantes.find(e => e.nombre === 'María');
console.log(maria);

console.log("________________");

/*
para este ejercicio usé find porque la consigna pedía encontrar un único estudiante con nombre María
sirve para encontrar el primer elemento que cumpla cierta condición y devolverlo directamente
me pareció que  fue muy directo, comparé el campo nombre con el string María y realizó la búsqueda dentro del arrays de objetos
*/


// 5. Usando reduce: Calcular la edad promedio de los estudiantes

console.log("Solución 9 - Punto 5");
console.log("Usando reduce: Calcular la edad promedio de los estudiantes");

const edadPromedio = estudiantes.reduce((a, e) => a + e.edad, 0) / estudiantes.length;
console.log("Edad promedio: ", edadPromedio);



/*
en este último punto la consigna me pedía calcular la edad promedio así que usé reduce para acumular las edades de todos los estudiantes
despues dividí el total por la cantidad de estudiantes para obtener el promedio final
reduce toma dos parámetros el acumulador y el valor actual. me ayudó a entender cómo transformar un array en un solo valor
*/






/////////////10. Películas//////////////////////////////////////////////////////////////////////////
console.log("________________________________________________________________");

const peliculas = [
 { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
 { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
 { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
 { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
 { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];


// 1. Usando forEach: Mostrar título y año de cada película

console.log("Solución 10 - Punto 1");
console.log("Usando forEach: Mostrar título y año de cada película");

peliculas.forEach(p => console.log(`${p.titulo} (${p.año})`));

console.log("________________");

/*
para este ejercicio usé forEach porque solo necesitaba recorrer el array y mostrar información en consola, sin transformarlo
imprimí el título y el año de cada película ya que esa era la información pedida 
el uso de forEach me permitió mantener el código simple y legible
también elegí interpolar los valores con template literals (`${}`) para que el resultado fuera más claro y con formato amigable
*/



// 2. Usando map: Crear array de títulos en mayúsculas

console.log("Solución 10 - Punto 2");
console.log("Usando map: Crear array de títulos en mayúsculas");

const titulosMayus = peliculas.map(p => p.titulo.toUpperCase());
console.log(titulosMayus);

console.log("________________");

/*
en este ejercicio utilicé map porque necesitaba transformar el array original de películas en otro que contuviera solo los títulos en mayúsculas
map me permite aplicar una transformación a cada elemento y devolver un nuevo array con esos resultados
con el método .toUpperCase() directamente sobre el campo titulo logré el efecto deseado, mostrar los títulos uniforme es mayusculas
*/



// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5

console.log("Solución 10 - Punto 3");
console.log("Usando filter: Obtener películas de drama con rating mayor a 8.5");

const dramasAltos = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log(dramasAltos);

console.log("________________");

/*
como la consigna me pedía obtener solo las películas que fueran del género "drama" y además tuvieran un rating superior a 8.5 usé filter
este método me permite aplicar varias condiciones y obtener un nuevo array con los elementos que las cumplen
fue necesario prestar atención a los operadores lógicos para combinar ambas condiciones
*/



// 4. Usando find: Encontrar película estrenada en 2014

console.log("Solución 10 - Punto 4");
console.log("Usando find: Encontrar película estrenada en 2014");

const peli2014 = peliculas.find(p => p.año === 2014);
console.log(peli2014);

console.log("________________");

/*
para encontrar una película estrenada en el año 2014 usé el método find que retorna el primer elemento que cumple con una condición
me pareció la mejor opción porque solo necesitaba encontrar una película, no todas las que pudieran coincidir
la búsqueda por año fue sencilla de implementar y me permitió practicar cómo acceder a propiedades numéricas dentro de un array de objetos
me pareció muy útil para localizar las películas específicas sin recorrer todo el array manualmente
*/




// 5. Usando reduce: Calcular la duración total de todas las películas

console.log("Solución 10 - Punto 5");
console.log("Usando reduce: Calcular la duración total de todas las películas");

const duracionTotal = peliculas.reduce((a, p) => a + p.duracion, 0);
console.log("Duración total:", duracionTotal);

console.log("________________");

/*
en este último ejercicio utilicé reduce para acumular la duración total de todas las películas
la idea era recorrer el array y sumar todas las duraciones en una sola variable acumuladora, partiendo de cero
me pareció una buena forma de practicar como reduce convierte un array completo en un único valor
*/


