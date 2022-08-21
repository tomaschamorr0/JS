let nombre = prompt("ingrese su nombre");
while (nombre =="") {
    alert("Nombre no Identificado");
    nombre = prompt("ingrese su nombre");

}
    alert(`Bienvenid@ ${nombre}`);
let numero = parseInt(prompt("ingrese un numero del 1 al 10"));
do{    
    if (numero>=1 && numero<=10){
        alert(`La tabla del ${numero} es`);
        for (let i = 1; i <= 10; i++){
            let multiplicacion = numero * i;
            let mensaje = `${numero} * ${i} =${multiplicacion}`;
            alert(mensaje);  
        }   
    }
    numero = prompt("ingresar un número del 1 al 10");
}
while(numero<=10 && numero>=1);
alert(`El número ${numero} es mayor a 10`);
let siwhile = prompt("¿Te gusto?").toLowerCase();
while (siwhile != "si") {
    siwhile = prompt("No entendi, ¿Te gusto?");
}
alert("Me alegro de que te haya gustado");