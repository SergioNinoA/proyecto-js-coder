
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

//const film# = new film (name, year, genre, duration in minutes)
const film1 = new film ("Spiderman", 2021, "Acción", 148);
const film2 = new film ("Animales fantásticos", 2022, "Fantasía", 142);
const film3 = new film ("Batman", 2022, "Acción", 175 );
const film4 = new film ("Dr. Strange en el multiverso de la locura",2022,"Acción - Fantasía", 126);

const userDate = document.getElementById("userDate");
const age = document.getElementById("age");

const calcularEdad = (userDate) => {
    const today = new Date();
    const currentYear = parseInt(today.getFullYear());
    const currentMonth = parseInt(today.getMonth()) + 1;
    const currentDay = parseInt(today.getDate());

    const yearOfBirth = parseInt(String(userDate).substring(0, 4));
    const monthOfBirth = parseInt(String(userDate).substring(5, 7));
    const dayOfBirth = parseInt(String(userDate).substring(8, 10));

    let age = currentYear-yearOfBirth;
    if (currentMonth < monthOfBirth) {
        age--;
    } else if (currentMonth === monthOfBirth){
        if (currentDay < dayOfBirth) {
            age--;
        }
    }
    return age;
}

window.addEventListener('load', function (){
    userDate.addEventListener('change', function(){
        if(this.value){
            age.innerText = `¿Tu edad es de ${calcularEdad(this.value)} años?`
        }
    })
});

let rFilm1 = document.getElementById('rFilm1');
let rFilm2 = document.getElementById('rFilm2');
let rFilm3 = document.getElementById('rFilm3');
let rFilm4 = document.getElementById('rFilm4');


if (age >= 18) {
    document.getElementById('rFilm1').innerText = `${film1.name}`;
    rFilm1.innerText = `${film1.name}`;
    rFilm2.innerText = `${film2.name}`;
    rFilm3.innerText = `${film3.name}`;
    rFilm4.innerText = `${film4.name}`;
    
} else {
    let text = document.createElement('div');
    text.className = 'text';
    text.innerHTML= ` 
    <h2>Gracias por visitarnos</h2>
    <p>Pide a un adulto que compre la entrada</p>
    `;
    document.body.appendChild(text);
}
/*


let btnComprar = document.getElementById('btnComprar');

btnComprar.addEventListener('click', comprarEntradas);

let cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));

function comprarEntradas() {
    if (cantidadEntradas = (parseInt(document.getElementById('numEntradas').value)) > 0){
        if (rFilm1.checked) {  
            cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film1.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm2.checked) {
            cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film2.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm3.checked) {
            cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film3.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else if (rFilm4.checked) {
            cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
            multiplicar(valorEntrada, cantidadEntradas);
            alert(`La compra de ${cantidadEntradas} entradas para ${film4.name} se realizó correctamente. El valor total de la compra es de ${resultado}`);
        } else {
            alert('Por favor seleccione una película');
        }
    } else {alert('Por favor seleccione la cantidad de entradas');}
} */


//valorar que se pueda guardar la edad, datos de usuario como nombre. Crear una función que pueda hacer una comprobación de la película seleccionada y envíe la información de regreso para que la compare con el array para extraer la película elegida