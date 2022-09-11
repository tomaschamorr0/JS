alert("Buenas Marcelo, en mi lista hay marcas de autos como...");
const autos = [" Lamborghini "," Porsche "," McLaren "," Bugatti "," BMW "," Tesla "," Lexus "];
alert(autos);
let operacion = prompt("Elige que operacion quiere hacer(ELIMINAR)(AGREGAR)").toLowerCase();
switch (operacion) {
    case "eliminar":
        alert("Usted selecciono la operacion ELIMINAR")
        let num = -1;
        let mensaje = "";
        autos.forEach(marca => {
            num++;
            mensaje=mensaje+"Marca "+num+":"+marca+"\n";
        });
        let respuestaeliminar=prompt("Ingrese la marca de auto que desee eliminar \n"+mensaje);
        autos.splice(parseInt(respuestaeliminar),1);
        alert(autos.join("--"));
        break;

    case "agregar":
        alert("Usted selecciono la operacion AGREGAR")
        let preguntaagregar = prompt("Elige donde quieres agregar al (principio) o al (final)");
        if(preguntaagregar === "final"){
            autos.push(prompt("Ingrese su nueva marca de auto"));
            alert(autos);
        }
        else if(preguntaagregar === "principio"){
            autos.unshift(prompt("Ingrese su nueva marca de auto"));
            alert(autos);
        }
        else{
            alert("No ingreso una operacion válida");
        }
        break;
        default:
            alert("No ingreso correctamente la operacion");
        break;
}
alert("Espero que le haya gustado y que termine bien el dia");