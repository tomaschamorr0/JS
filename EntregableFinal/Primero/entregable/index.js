class Auto{
    constructor( marca, modelo ,color ,kilometros, valor){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometros = kilometros;
        this.valor = valor;
        }
}
const autos = [new Auto ("Lamborghini " ," Aventador LP 780-4 " ," Amarillo "  ," 350 km/h " , 417825), 
new Auto ("Porsche " ," 911 Carrera " ," Gris "  ," 311 km/h " , 345000),
new Auto ("Bugatti " ," Veyron " ," Negro "  ," 408 Km/h " , 1222500),
new Auto ("BMW " ," Serie 8  " ," Negro y dorado "  ," 250 km/h " , 258000)]

let respuestasi = prompt("¿Desea ver los autos?").toLowerCase();
if (respuestasi != "si") {
    alert("Lo vas a necesitar")
}
else{
    let mensaje = "";
    autos.forEach(a => {
        alert("Auto: \n"+a.marca + a.modelo)
    });
};
function borrar(){
    alert("Usted selecciono la operacion ELIMINAR")
    let num = -1;
    let mensaje = "";
    autos.forEach(a => {
        num++;
        mensaje=mensaje+"Marca "+num+" "+a.marca+":\n";
    });
    let respuestaeliminar=prompt("Ingrese el numero de la marca de auto que desee eliminar \n"+mensaje);
    autos.splice(parseInt(respuestaeliminar),1);
}
function agregar() {
    let mensaje = "";
    autos.push(new Auto(prompt("Ingrese su nueva marca de auto"),"","","",0));
}
function mostrar(){
    let mensaje = "";
    autos.forEach(a => {
        alert("Marca: "+a.marca +"\n"+"Modelo: " +a.modelo +"\n"+"Color: "+a.color +"\n"+"Llega hasta: "+a.kilometros +"\n"+"Valor: " + a.valor+"$ USD")
    });
}
function muestraFinal(){
    const autitos = autos.map((el)=> el.marca)
    console.log(autitos);
    alert ("Aqui estan los Autos:\n"+autitos);
    alert("Espero que le haya gustado");
}    
let operacion = prompt("Elige que operacion quiere hacer:\n1) ELIMINAR \n2) AGREGAR \n3) VER LOS DATOS DE LOS AUTOS \n Escriba el numero de la operacion").toLowerCase();
    switch (operacion) {
        case "1":
            borrar();
            break;

        case "2":
            agregar();
            break;

        case "3":
            mostrar();
            break;

        default:
            alert("No ingreso correctamente la operacion");
            break;
    }
if (operacion != "3" ) {
    muestraFinal();
}
else{
    alert("Espero que le haya gustado")
}