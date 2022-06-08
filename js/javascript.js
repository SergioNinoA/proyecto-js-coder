
let valorEntrada = 1000;
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
const film4 = new film ("Dr. Strange en el multiverso de la locura",2022,"Acción - Fantasía", 126);

let userAge = parseInt(prompt('Bienvenid@ a Cinema JS. Por favor ingrese su edad'));

if (userAge >= 18) {
    let text = document.createElement('div');
    text.className = 'text';
    text.innerHTML= `
    <h2>Compra tus entradas</h2>
    <p>Elige la película de tu prefencia. Las películas disponibles son:</p>
    <form>
        <ol>
            <li class="peliculas"><input type="radio" name="film_list" id="rFilm1"><label for="rFilm1">${film1.name}</label></li>
            <li class="peliculas"><input type="radio" name="film_list" id="rFilm2"><label for="rFilm2">${film2.name}</label></li>
            <li class="peliculas"><input type="radio" name="film_list" id="rFilm3"><label for="rFilm3">${film3.name}</label></li>
            <li class="peliculas"><input type="radio" name="film_list" id="rFilm4"><label for="rFilm4">${film4.name}</label></li>
        </ol>
        <p>El valor de la localidad es de ${valorEntrada}.</p>
        <p>Indique la cantidad de entradas a comprar:</p>
        <input type="number" name="cantidad_entradas" id="numEntradas" min="1">
        <button type="button" id="btnComprar">Comprar</button>
    </form>     
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

let rFilm1 = document.getElementById('rFilm1');
let rFilm2 = document.getElementById('rFilm2');
let rFilm3 = document.getElementById('rFilm3');
let rFilm4 = document.getElementById('rFilm4');

let btnComprar = document.getElementById('btnComprar');

btnComprar.addEventListener('click', comprarEntradas);

function comprarEntradas() {
    if (cantidadEntradas = (parseInt(document.getElementById('numEntradas').value))>0){
        if (rFilm1.checked) {
            cantidadEntradas = parseInt(document.getElementById('numEntradas').value);
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film1.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm2.checked) {
            cantidadEntradas = parseInt(document.getElementById('numEntradas').value);
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film2.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm3.checked) {
            cantidadEntradas = parseInt(document.getElementById('numEntradas').value);
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film3.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm4.checked) {
            cantidadEntradas = parseInt(document.getElementById('numEntradas').value);
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film4.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else {
            alert('Por favor seleccione una película');
        }
    } else {alert('Por favor seleccione la cantidad de entradas');}
}


//valorar que se pueda guardar la edad, datos de usuario como nombre. Crear una función que pueda hacer una comprobación de la película seleccionada y envíe la información de regreso para que la compare con el array para extraer la película elegida