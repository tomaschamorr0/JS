let nombreAlumno = prompt ("Ingresar nombre");
let apellidoAlumno = prompt ("Ingresar apellido");
alert ("El Alumno es " + nombreAlumno+ " " + apellidoAlumno);
alert ("Aviso, para aprobar necesita que el resultado total sea 6 o mayor");
let num1 = parseInt(prompt("Ingrese el valor de la primer evaluacion"));
let num2 = parseInt(prompt("Ingrese el valor de la segunda evaluacion"));
let num3 = parseInt(prompt("Ingrese el valor de la tercer evaluacion"));
let promedio;
function promediar(num1,num2,num3,){
    let resultado = (num1+num2+num3)/3;
    return resultado;
}
promedio = promediar(num1,num2,num3);
if (promedio >=6) {
    alert("El alumno " + nombreAlumno + " " + apellidoAlumno + " tiene un promedio de " + promedio + "  aprobó");
}else{
    alert("El alumno" + nombreAlumno + " " + apellidoAlumno + " tiene un promedio de " + promedio + " desaprobó");
}