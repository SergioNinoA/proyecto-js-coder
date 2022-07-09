let valorEntrada = 1000;

function multiplicar(valor, cantidad) {
    resultado = valor * cantidad
}

class contacto {
    constructor(name, phone, mail) {
        this.name = name;
        this.phone = phone;
        this.mail = mail;
    }
}
const contac1 = new contacto("Sucursal Centro", 15555555, "info@cinemajs.com");
const contac2 = new contacto("Sucursal Norte", 15555559, "infonorte@cinemajs.com");

const infoContacto = () => {
    let text = document.getElementById('contacto');
    text.className = 'contacto';
    text.innerHTML = ` 
    <h4>Comuniquese con nosotros</h4>
    <div class="contacto_card">
        <h5>${contac1.name}</h5>
        <p>Teléfono: ${contac1.phone} - E-mail: ${contac1.mail}</p>
    </div>
    <div class="contacto_card">
        <h5>${contac2.name}</h5>
        <p>Teléfono: ${contac2.phone} - E-mail: ${contac2.mail}</p>
    </div>
    `;
    text.textContent;
}
infoContacto();

var lstFilms = [
    {
        "id": "1",
        "name": "Spiderman",
        "year": "2021",
        "genre": "Acción",
        "duration": "148"
    },
    {
        "id": "2",
        "name": "Animales fantásticos",
        "year": "2022",
        "genre": "Fantasía",
        "duration": "142"
    },
    {
        "id": "3",
        "name": "Batman",
        "year": "2022",
        "genre": "Acción",
        "duration": "175"
    },
    {
        "id": "4",
        "name": "Dr. Strange en el multiverso de la locura",
        "year": "2022",
        "genre": "Acción - Fantasía",
        "duration": "126"
    }
];

const ref_txt_UserDate = document.getElementById("userDate");
const ref_divAge = document.getElementById("age");

const mostrarEdad = (p_dt_userDate) => {
    const today = new Date();
    const currentYear = parseInt(today.getFullYear());
    const currentMonth = parseInt(today.getMonth()) + 1;
    const currentDay = parseInt(today.getDate());

    const yearOfBirth = parseInt(String(p_dt_userDate).substring(0, 4));
    const monthOfBirth = parseInt(String(p_dt_userDate).substring(5, 7));
    const dayOfBirth = parseInt(String(p_dt_userDate).substring(8, 10));

    let age = currentYear - yearOfBirth;
    if (currentMonth < monthOfBirth) {
        age--;
    } else if (currentMonth === monthOfBirth) {
        if (currentDay < dayOfBirth) {
            age--;
        }
    }
    return age;
}
window.addEventListener('load', function () {
    ref_txt_UserDate.addEventListener('change', function () {
        if (this.value) {
            ref_divAge.innerText = `¿Tu edad es de ${mostrarEdad(this.value)} años?`
        }
    })
});

let btnEdad = document.getElementById('btnEdad');
btnEdad.addEventListener('click', comprobarEdad);

const mayor18 = () => {
    let text = document.getElementById('text');
    text.className = 'text';
    var strHtml = `
        <h2>Compra tus entradas</h2>
        <p>Elige la película de tu prefencia. Las películas disponibles son:</p>
        <form>
        <ol>`;
    for (let index = 0; index < lstFilms.length; index++) {
        strHtml += `<li class="peliculas"><input type="radio" name="film_list" id="rFilm${lstFilms[index].id}"><label for="rFilm${lstFilms[index].id}">${lstFilms[index].name}</label></li>`;
    }
    strHtml += `</ol>
        <p>El valor de la localidad es de ${valorEntrada}.</p>
        <p>Indique la cantidad de entradas a comprar:</p>
        <input type="number" name="cantidad_entradas" id="numEntradas" min="1">
        <button type="button" id="btnComprar" class="button">Comprar</button>
        </form>
        <p> Conozca más sobre la cartelera disponible</p>
        `;
    text.innerHTML = strHtml;
    text.textContent;

    document.getElementById("datos").style.display = "none";
    document.getElementById("btnInfo").style.display = "block";

    let btnComprar = document.getElementById('btnComprar');
    btnComprar.addEventListener('click', comprarEntradas);
}

const menor18 = () => {
    let text = document.getElementById('text');
    text.className = 'text';
    text.innerHTML = ` 
    <h2>Gracias por visitarnos</h2>
    <p>Pide a un adulto que compre la entrada</p>
    `;
    text.textContent;

    document.getElementById("datos").style.display = "none";
}

function comprobarEdad() {
    if (parseInt(mostrarEdad(ref_txt_UserDate.value)) >= 18) {
        mayor18();
    } else {
        menor18();
    }
}

function comprarEntradas() {
    let cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
    let rFilm1 = document.getElementById('rFilm1');
    let rFilm2 = document.getElementById('rFilm2');
    let rFilm3 = document.getElementById('rFilm3');
    let rFilm4 = document.getElementById('rFilm4');
    if (cantidadEntradas = (parseInt(document.getElementById('numEntradas').value)) > 0) {
        if (rFilm1.checked) {
            anunciarCompra(lstFilms[0].name);
        } else if (rFilm2.checked) {
            anunciarCompra(lstFilms[1].name);
        } else if (rFilm3.checked) {
            anunciarCompra(lstFilms[2].name);
        } else if (rFilm4.checked) {
            anunciarCompra(lstFilms[3].name);
        } else {
            Swal.fire({
                title: 'Atención',
                text: 'Por favor seleccione una película.',
                icon: 'info',
                confirmButtonText: 'OK',
            })
        }
    } else {
        Swal.fire({
            title: 'Atención',
            text: 'Por favor seleccione la cantidad de entradas.',
            icon: 'info',
            confirmButtonText: 'OK',
        })
    }
}

function anunciarCompra(nombreFilm) {
    let cantidadEntradas = (parseInt(document.getElementById('numEntradas').value));
    multiplicar(valorEntrada, cantidadEntradas);
    Swal.fire({
        text: `El valor total es de ${resultado}. ¿Desea confirmar la compra?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Gracias',
                icon: 'success',
                text: `La compra de ${cantidadEntradas} entrada(s) para "${nombreFilm}" se realizó correctamente.`
            })
        }
    })
}

const url_json = "peliculas.json"
let count = 0;

$("#btnInfo").click(() => {
    if (count < 1) {
        count++;
        $.getJSON(url_json, function (respuesta, estado) {
            if (estado === "success") {
                let datos_peliculas = respuesta.peliculas;
                for (const dato of datos_peliculas) {
                    $("#card").prepend(`
                    <div class="col">
                <div class="card text-white bg-dark mb-2 h-100">                
                    <div>
                        <img src="${dato.img}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#img${dato.id}" alt="">
                    </div>
                    <!-- Modal imágen ${dato.id} -->
                    <div tabindex="-1" aria-labelledby="img${dato.id}" aria-hidden="true" class="modal fade" id="img${dato.id}">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <img id="${dato.id}" src="${dato.img}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${dato.name}</h5>
                        <p class="card-text"> Año de lanzamiento: ${dato.year}</p>
                                        <p class="card-text"> Duración en minutos: ${dato.duration}</p>
                        <p class="card-text italic">Descripción: "${dato.sinopsis}"</p>
                    </div>
                    </div>                
                    </div>
                                    `);
                }
            } else {
                console.log("Ocurrio un error inesperado, estado:" + estado);
            }
        })
    }
});
