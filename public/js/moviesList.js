console.log("funciona la vinculacion");
let qs = (element) => document.querySelector(element)
let qsa = (element) => document.querySelectorAll(element)
let $ = (element) => document.getElementById(element)

let body = qs("body")
let h1 = qs("h1")

let modoOscuro = confirm("Desea agregar un fondo?")


h1.textContent = "“LISTADO DE PELÍCULAS”" 

h1.style.Color="#7f7f7f"
h1.style.backgroundColor="#7f7f7f"
h1.style.padding="20px"


if (modoOscuro) {
    body.style.backgroundColor="#7f7f7f"
    body.classList.add("fondoMoviesList")
    body.classList.add("a_ModoOscuro")
}


