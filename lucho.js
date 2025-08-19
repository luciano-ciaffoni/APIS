
let titulo = document.querySelector("#titulo")
let imagen = document.querySelector("#imagen")
let boton = document.querySelector("#boton")

boton.onclick = function (){
    fetch("https://pokeapi.co/api/v2/pokemon-form/157/")
        .then(respuesta => respuesta.json () )
        .then(datos => {
            console.log(datos)
            titulo.textContent = datos.name
            imagen.src = datos.sprite.front_shiny
        })
}
