console.log("funciona la vinculacion");
let qs = (element) => document.querySelector(element)
let qsa = (element) => document.querySelectorAll(element)
let $ = (element) => document.getElementById(element)

/* Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
● Agregar al artículo la clase: “fondoTransparente”.
● Agregar a la sección la clase: “fondoCRUD”.
 */

let h1 = qs("h1")
let section = qs("section")
let article = qs("article")

h1.textContent = "“AGREGAR PELÍCULAS”" 
h1.classList.add("titulo")
article.classList.add("fondoTransparente")
section.classList.add("fondoCRUD") 