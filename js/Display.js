class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar: "+",
            dividir: "/",
            multiplicar: "x",
            restar: "-",
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();  
    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();  
    }

    agregarNumero(numero) {
        if(numero === "." && this.valorActual.includes(".")) return /*Sí número es igual a punto, entonces el valor actual es el punto y no debe seguir colocando más puntos ni números. El Return me dice que hasta ahí debe quedar o frenar la instrucción.*/
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;

       /*this.displayValorAnterior.textContent = "${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}";*/
    }

    /* Desde display vamos a darle a la calculadora para que haga cálculos.*/ 
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}


