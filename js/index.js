/*Aquí declaramos las variables e introducimos los elementos que vamos a utilizar para añadir interactividad a la página, las variables las creamos con nombres semejante a los nombres de los elementos. Estos elementos los tomamos del archivo HTML (index.html).*/

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
});



