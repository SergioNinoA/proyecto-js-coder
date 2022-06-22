let valorEntrada = 1000;

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
    let text = document.getElementById('text');
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
    <p> Conozca más sobre la cartelera disponible <button type="button" id="btnFilm1">Ver Info</button></p>
    `;
    text.textContent;
} else {
    let text = document.getElementById('text');
    text.className = 'text';
    text.innerHTML= ` 
    <h2>Gracias por visitarnos</h2>
    <p>Pide a un adulto que compre la entrada</p>
    `;
    text.textContent;
}
let rFilm1 = document.getElementById('rFilm1');
let rFilm2 = document.getElementById('rFilm2');
let rFilm3 = document.getElementById('rFilm3');
let rFilm4 = document.getElementById('rFilm4');

let cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
let btnComprar = document.getElementById('btnComprar');

function anunciarCompra (nombreFilm) {
    cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
    multiplicar(valorEntrada, cantidadEntradas);
    Swal.fire({
        text: `El valor total es de ${resultado}. ¿Desea confirmar la compra?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result)=>{
        if(result.isConfirmed){                    
            Swal.fire({
                title: 'Gracias',
                icon: 'success',
                text: `La compra de ${cantidadEntradas} entrada(s) para "${nombreFilm}" se realizó correctamente.`
            })
        }
    })
}

btnComprar.addEventListener('click', comprarEntradas);

function comprarEntradas() {
    if (cantidadEntradas = (parseInt(document.getElementById('numEntradas').value)) > 0){
        if (rFilm1.checked) {
            anunciarCompra(film1.name);
        } else if (rFilm2.checked) {
            anunciarCompra(film2.name);
        } else if (rFilm3.checked) {
            anunciarCompra(film3.name);
        } else if (rFilm4.checked) {
            anunciarCompra(film4.name);
        } else {
            Swal.fire({
                title: 'Atención',
                text:'Por favor seleccione una película.',
                icon:'info',                
                confirmButtonText:'OK',
            }) 
        }
    } else {
        Swal.fire({
        title: 'Atención',
        text:'Por favor seleccione la cantidad de entradas.',
        icon:'info',                
        confirmButtonText:'OK',
        })
    }
} 

const url_json = "./peliculas.json"

let count = 0;

$("#btnFilm1").click(() => {
    if (count < 1) {
        count++;
        $.getJSON(url_json, function (respuesta, estado) {
            if (estado === "success") {
                let datos_peliculas = respuesta.peliculas;
                for (const dato of datos_peliculas) {                    
                    $("#card").prepend(`<div>
                                    <h3>${dato.name}</h3>
                                    <p> Año de lanzamiento: ${dato.year}</p>
                                    <p> Duración en minutos: ${dato.duration}</p>
                                </div>`);
                }
            } else {
                console.log("Ocurrio un error inesperado, estado:" + estado);
            }
        })
    }
});