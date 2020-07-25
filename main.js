// Calcular la Edad del Boby

// 1 - Ingresar la cantidad de años humanos desde un input
// 2 - Tomar el valor del input al enviar el formulario (evento submit)
// 3 - Anular la funcionalidad por defecto del formulario
// 4 - Validar que el dato ingresado sea un número
// 5 - Si no es un número, devolvermos un mensaje de error en el elemento p
// 6 - Si es un número, hacer el calculo (con una función)
// 7 - Devolver el mensaje con la cantidad de años del 🐶 en el elemento p
//1 - Devolver el mensaje de error en la etiqueta "p" que tiene el id "mensaje", en lugar de con el alert.
//2 - Crear una función que reciba como argumento la edad humana en números (edadNumero),
//haga el calculo de la edad de de perros y devuelva el valor con un "return".
//Por último vamos a utilizar esa función en lugar de hacer el cálculo adentro del ciclo condicional (if...else...)
//Les dejo la mitad del trabajo hecho, jeje.


let formulario = document.querySelector("#formulario");

let mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    let edad = document.querySelector("#edad").value
    let edadNumero = parseInt(edad);
    if (isNaN(edadNumero)){
    return mensaje.innerHTML ="esto no es un numero";
    }
    let edadPerro = calcularEdadPerro(edadNumero);
    mensaje.innerHTML = `Tu 🐶 tiene ${edadPerro} años`;
    formulario.reset();
})
function calcularEdadPerro(edadHumana){
    return edadNumero*7;
    }