# Módulo-04  :lemon:

**Bootcamp JS 2 - Bootcamp JS 2 - Laboratorio Módulo 4 - Funciones**

Las funciones en JavaScript son bloques de código reutilizables que permiten ejecutar tareas específicas. Se pueden definir y luego invocar (llamar) cuando sea necesario. Las funciones ayudan a organizar el código y evitar la repetición.

## Sintaxis básica de una función

><pre>function nombreFuncion(parámetros) {
    ><pre>// Cuerpo de la función: el código que se ejecuta cuando se llama la función
    ><pre>return resultado;}
## Ejemplo simple
Este ejemplo muestra una función llamada suma que toma dos parámetros (a y b), los suma y devuelve el resultado.


><pre>function suma(a, b) {
    ><pre>return a + b;
    ><pre>}
><pre>
><pre>// Llamar a la función
><pre>let resultado = suma(3, 4); // resultado es 7
><pre>console.log(resultado);

## Funciones anónimas
Una función anónima es una función sin nombre. Suelen usarse en asignaciones de variables o como funciones de retorno en otras funciones.


><pre>const multiplicar = function(a, b) {
    ><pre>return a * b;
><pre>};
><pre>console.log(multiplicar(2, 3)); // Devuelve 6

## Funciones flecha (Arrow Functions)
Las arrow functions introducidas en ES6 son una forma más concisa de escribir funciones.


><pre>const dividir = (a, b) => a / b;

><pre>console.log(dividir(10, 2)); // Devuelve 5

### Diferencias clave de las funciones flecha:
### :one:
 No tienen su propio this, lo que puede simplificar el manejo de ciertos contextos.

### :two:
Son más compactas en su sintaxis.
