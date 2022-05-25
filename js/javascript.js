
let entrada = 1000;
let cantidadEntradas = 0;

function multiplicar(valor, cantidad) {
    resultado = valor * cantidad
}

function comprarEntrada(film) {
    alert('El precio por entrada es de ' + entrada)
    cantidadEntradas = parseInt(prompt("Ingresa cantidad de entradas a comprar"));
    if (cantidadEntradas > 0) {
        multiplicar(entrada, cantidadEntradas);
        let condition = prompt('El total a pagar es de ' + resultado + '. ¿Está seguro de su compra? S: Sí | N: No');
        while (condition != 'N') {
            switch (condition) {
                case 'S':
                    alert('Gracias por comprar ' + cantidadEntradas + ' entradas para ver ' + film + ', le esperamos en nuestras salas');
                    condition = 'N';
                    break;
                default:
                    alert('Elegiste una opción inválida');
                    condition = prompt('¿Está seguro de su compra? S: Sí | N: No');
                    break;
            }
        }
    } else {
        alert('Opción inválida');
    }
}

const filmList = ["Spiderman", "Animales fantásticos", "Batman", "El hombre del Norte"];
let userAge = parseInt(prompt('Bienvenido a Cinema JS. Por favor ingrese su edad'));

if (userAge >= 18) {
    let opcion = prompt('Elija la película de su preferencia: 1- ' + filmList[0] + '. 2- ' + filmList[1] + '. 3- ' + filmList[2] + '. 4- ' + filmList[3] + '. Presiona X para finalizar')
    while (opcion != 'X') {
        switch (opcion) {
            case '1':
                comprarEntrada(filmList[0]);
                break;
            case '2':
                comprarEntrada(filmList[1]);
                break;
            case '3':
                comprarEntrada(filmList[2]);
                break;
            case '4':
                comprarEntrada(filmList[3]);
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        opcion = prompt('Elija la película de su preferencia: 1- ' + filmList[0] + '. 2- ' + filmList[1] + '. 3- ' + filmList[2] + '. 4- ' + filmList[3] + '. Presiona X para finalizar');
    } alert('Gracias por confiar en nuestro cine')

} else {
    alert('Pide a un adulto que compre la entrada');
} 
