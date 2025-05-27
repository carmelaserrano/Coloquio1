function obtenerNum(){
    const input= document.getElementById("number").value;
    return parseInt(input);
}

function mostrarResultado(mensaje){
    document.getElementById("resultado").innerHTML = mensaje;
}

function calcularDoble(){
    const num=obtenerNum();
    if (isNaN(num)) {
        mostrarResultado("Por favor, ingresa un número válido.");
    } else {
        const resultado = num * 2;
        mostrarResultado("El doble de " + num + " es " + resultado);
    }
}

function calcularFactorial(){
    const num=obtenerNum();
    if (isNaN(num) || num < 0) {
        mostrarResultado("Por favor, ingresa un número entero no negativo.");
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        mostrarResultado("El factorial de " + num + " es " + factorial);
    }  
}

function esPrimo(){
    const num=obtenerNum();
    if (isNaN(num) || num < 2) {
        mostrarResultado("Por favor, ingresa un número entero mayor o igual a 2.");
        return;
    }
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    mostrarResultado(num + (esPrimo ? " es un número primo." : " no es un número primo."));
}

