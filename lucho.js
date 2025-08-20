
/*let titulo = document.querySelector("#titulo")
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
 


let titulo = document.querySelector("#titulo")
let imagen = document.querySelector("#imagen")
let boton = document.querySelector("#boton")


boton.onclick = function () {
    fetch("https://pokeapi.co/api/v2/pokemon-form/89/")
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)
            titulo.textContent = datos.name
            imagen.src = datos.sprites.front_default 
        })
}

*/

let titulo = document.querySelector("#titulo")
let imagen = document.querySelector("#imagen")
let boton = document.querySelector("#boton")

boton.onclick = function () {
    fetch("https://pokeapi.co/api/v2/pokemon/89/")
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)
            
            // Obtener tipos
            let tipos = datos.types.map(tipo => tipo.type.name).join(', ')
            
            // Mostrar nombre + tipo
            titulo.textContent = `#${datos.id} - ${datos.name} (Tipo: ${tipos})`
            
            // Imagen
            imagen.src = datos.sprites.front_default
        })
}