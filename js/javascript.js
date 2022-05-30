
let entrada = 1000;
let cantidadEntradas = 0;

function multiplicar(valor, cantidad) {
    resultado = valor * cantidad
}

class film {
    constructor( name, year, genre, duration){
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.duration = duration;
    }
}

const film1 = new film ("Spiderman", 2021, "Acción", 148);
const film2 = new film ("Animales fantásticos", 2022, "Fantasía", 142);
const film3 = new film ("Batman", 2022, "Acción", 175 );
const film4 = new film ("Dr Strange en el multiverso de la locura",2022,"Acción - Fantasía", 126);



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

/* Esto de acá hay que modificarlo para que se pueda agregar/mostrar un nuevo objeto a la lista de películas */

const spiderman = { name: "Spiderman", year: 2021, genre: "Acción", duration: 148}
const animalesFantasticos = {name: "Animales fantásticos", year: 2022, genre: "Fantasía", duration: 142}
const batman = {name: "Batman", year: 2022, genre: "Acción", duration: 175}
const drStrange = {name: "Dr Strange en el multiverso de la locura", year: 2022, genre: "Acción - Fantasía", duration: 126}

/* const filmList = [spiderman.name, animalesFantasticos.name, batman.name, drStrange.name]; */


let userAge = parseInt(prompt('Bienvenido a Cinema JS. Por favor ingrese su edad'));

if (userAge >= 18) {
    let text = document.createElement('div');
    text.className = 'text';
    text.innerHTML= `
    <h2>Compra tus entradas</h2>
    <p>Las películas disponibles son:</p>
    <ol>
        <li>${film1.name}</li>
        <li>${film2.name}</li>
        <li>${film3.name}</li>
        <li>${film4.name}</li>
    </ol>        
    `;
    document.body.appendChild(text);
} else {
    let text = document.createElement('div');
    text.className = 'text';
    text.innerHTML= ` 
    <h2>Gracias por visitarnos</h2>
    <p>Pide a un adulto que compre la entrada</p>
    `;
    document.body.appendChild(text);
}

/* if (userAge >= 18) {
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
} */