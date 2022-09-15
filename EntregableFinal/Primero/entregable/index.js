class autos {
    constructor( marca, modelo ,color ,kilometros, valor){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kilometros = kilometros;
    this.valor = valor;
    }
} 
const auto1 = new autos(" Lamborghini " ," Aventador LP 780-4 " ," Amarillo "  ," 350 km/h " , 417825);
const auto2 = new autos(" Porsche " ," 911 Carrera " ," Gris "  ," 311 km/h " , 345000);
const auto3 = new autos(" Bugatti " ," Veyron " ," Negro "  ," 408 Km/h " , 1222500);
const auto4 = new autos(" BMW " ," Serie 8  " ," Negro y dorado "  ," 250 km/h " , 258000);
    
let respuestasi = prompt("¿Desea ver los autos?");
if (respuestasi != "si") {
    alert("Los vas a necesitar")
}
else{
    alert("Aqui estan los autos");
    alert("Tenemos un "+ auto1.marca+" , "+ auto2.marca +" , "+ auto3.marca +" y "+ auto4.marca);
};
function eliminar(){
    alert("Usted selecciono la operacion ELIMINAR")
    let num = -1;
    let mensaje = "";
    autos.forEach(marca => {
        num++;
        mensaje=mensaje+"Marca "+num+":"+autos.marca+"\n";
    });
    let respuestaeliminar=prompt("Ingrese la marca de auto que desee eliminar \n"+mensaje);
    autos.splice(parseInt(respuestaeliminar),1);
    alert(autos.join("--"));
}
function añadir(){
    alert("Usted selecciono la operacion AGREGAR")
    let preguntaagregar = prompt("Elige donde quieres agregar al (principio) o al (final)");
    if(preguntaagregar === "final"){
        marca.push(prompt("Ingrese su nueva marca de auto"));
        alert(autos);
    }
    else if(preguntaagregar === "principio"){
        autos.unshift(prompt("Ingrese su nueva marca de auto"));
        alert(autos);
    }
    else{
        alert("No ingreso una operacion válida");
    }
}
function mostrar(){
    alert("Aqui estan los autos")
    alert(autos.auto1);
    alert(autos.auto2);
    alert(autos.auto3);
    alert(autos.auto4);
}
let operacion = prompt("Elige que operacion quiere hacer(\n1)ELIMINAR \n2)AGREGAR \n3)VER AUTOS \n Escriba el numero").toLowerCase();
    switch (operacion) {
        case "1":
            eliminar();
            break;

        case "2":
            añadir();
            break;

        case "3":
            mostrar();
            break;
            
        default:
            alert("No ingreso correctamente la operacion");
            break;
    }