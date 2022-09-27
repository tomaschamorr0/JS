function obternetListaUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLS"));

    if(listaUsuarios ==null){
        listaUsuarios =
        [
            /* id, nombre, apellido, correo, contraseña, nacimiento, rol */
            ["1","Tomas","Chamorro","tomaschamorro@gmail.com","tom1","2000-09-12","1"],
            ["2","Number","Five","numberfive@gmail.com","thekidwantscoffe","1989-10-1","2"],
            ["3","Diego","Hargreeves","diegohargreeves@gmail.com","cuchillas","1989-10-1","2"],
        ]
    }
    return listaUsuarios;
}
function validarCredeciales(pCorreo, pContraseña){
    let listaUsuarios = obternetListaUsuarios();
    let bAccesso = false;

    for(i = 0; i< listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i] [3] && pContraseña == listaUsuarios [i][4]){
            bAccesso = true;
            sessionStorage.setItem("usuarioActivo", listaUsuarios[i][1] + "" + listaUsuarios[i][2]);
            sessionStorage.setItem("rolUsuarioActivo", listaUsuarios[i][6]);
        }
    }

    return bAccesso;
}


/* interfaziniciosesion */
let btnIngresar = document.getElementById("btnIngresar");

function ingresar(){
    let rol = sessionStorage.getItem("rolUsuarioActivo");
    switch (rol) {
        case "1":
            location.href = "login.html";
            break;
        case "2":
            location.href = "login.html";
            break;
        default:
            break;
    }
}


btnIngresar.addEventListener("click",()=>{
    let sCorreo ="";
    let sContrasenna ="";
    let bAccesso = false;

    sCorreo = document.getElementById("txtCorreo").value;
    sContrasenna = document.getElementById("txtContrasenna").value;

    bAccesso = validarCredeciales(sCorreo,sContrasenna);
    
    if(bAccesso == true){
        ingresar();
        console.log("Estamos adentro");
    }
    else{
        console.log("Error");
        Swal.fire({
            title: "Error!",
            text: "Parece que no escribiste correctamente tu correo electrónico o la contraseña",
            icon: "error",
            confirmButtonText: " =( ",
          });
    }
})