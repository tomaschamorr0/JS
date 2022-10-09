let contenedor = document.getElementById("contenedor");
fetch("./cuenta.json")
.then(response => response.json())
.then(data =>{
    data.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
        <br>
        <h2>Nombre: ${item.nombre}</h2>
        <p>Apellido: ${item.apellido}</p>
        <p>Correo: ${item.correo}</p>
        <b>Contraseña: ${item.contraseña}</b>
      `;
        contenedor.append(li);
      });
    });