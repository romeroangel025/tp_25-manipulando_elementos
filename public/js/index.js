console.log("funciona la vinculacion");
let qs = (element) => document.querySelector(element)
let qsa = (element) => document.querySelectorAll(element)
let $ = (element) => document.getElementById(element)
    
let body = qs("body")
const main = $("mainContainer")
let h2 =qsa("h2") 
let a =qs("a") 
let p =qsa("p") 
let subtitulo = qs(".subtitulo")

main.style.display="block"
subtitulo.style.textTransform = "uppercase";
a.style.color="#E51B3E"

let nombre = prompt("Escriba su nombre!")
let respuesta = confirm("Desea agregar un fondo?")

respuesta ? body.classList.add("fondo"): null;

nombre ? subtitulo.textContent += nombre : subtitulo.textContent += "invitado"

for (let i = 0; i < p.length; i++) {
  (i%2===0)? p[i].classList.add("destacadoPar"): p[i].classList.add("destacadoImpar")
}


