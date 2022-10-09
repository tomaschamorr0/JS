const btnAuto = document.getElementById("btnAuto");
const btnFoto = document.getElementById("btnFoto");
const btnPrecio = document.getElementById("btnPrecio");
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

/* Pulsando el boton "Fotos Autos"   */
btnFoto.addEventListener("click",()=>{
    console.log("Click");
/* Aca depediendo el numero que elija muestra la operacion/sweetalert del auto que eligio */ 
let operacionFotos = prompt("Elige que auto desea ver\n1) Lamborghini\n2) Porsche \n3) Bugatti \n4) BMW").toLocaleLowerCase();  
    switch (operacionFotos) {
        case "1":
            Swal.fire({
                title: 'Lamborghini Aventador LP 780-4 ',
                text: 'Color: Amarillo',
                imageUrl: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/46750/aventador_lp750-4_sv_tuning_w1400.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Imagen Lambo',
              })
            break;
    
        case "2":
            Swal.fire({
                title: 'Porsche 911 Carrera ',
                text: 'Color: Gris ',
                imageUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2018/11/20181129-Porsche-911-Carrera-4S.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Imagen Porsche',
              })
            break;

        case "3":
            Swal.fire({
                title: 'Bugatti Veyron ',
                text: 'Color: Negro',
                imageUrl: 'https://conduciendo.com/wp-content/uploads/Bugatti-Veyron-Super-Sport-070621-04.jpg',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Imagen Bugatti',
              })
            break;

        case"4":
        Swal.fire({
            title: 'BMW Serie 8  ',
            text: 'Color: Negro y dorado',
            imageUrl: 'http://diarioautomotor.com.ar/wp-content/uploads/2020/06/BMW2Bserie2B82BGolden2B1.jpg',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Imagen BMW',
          })
            break;

        default:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese correctamente una opción',
              })
            break;
    }
});
/* Pulsando el boton "Que autos tenemos?" */
btnAuto.addEventListener("click",()=>{
    console.log("Click");
    autos.forEach(a => {
        alert("Auto: \n"+a.marca + a.modelo)
    });
});
 /* Pulsando el boton "Precios" */
btnPrecio.addEventListener("click",()=>{
    console.log("Click");
    autos.forEach(a => {
        alert("Auto: \n"+a.marca + a.modelo +"\nCon un valor de "+a.valor+"$ USD")
    });
});