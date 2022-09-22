const parrafo = document.querySelector("p");
const boton = document.getElementById("btnCambio");
let contador = 0;
let botonCambioTitulo = document.getElementById("botonTitulo");
let btnRojo = document.getElementById("btnRojo");

btnRojo.addEventListener("click",()=>{
    let titulo = document.getElementById("encabezado");
    titulo.style.color = "red";
});
 boton.addEventListener("click",() => {
    console.log("click");
    contador++;
    parrafo.textContent = contador;
}); 
botonCambioTitulo.onclick =() =>{
    let cambioTitulo = document.getElementById("cambioTitulo").value;
    let nuevoTitulo = document.getElementById("nuevoTitulo");
    nuevoTitulo.innerHTML = cambioTitulo;
}


