let contenedor = document.getElementById("container");
fetch("./operaciones.json")
.then(response => response.json())
.then(data =>{
    data.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
        <h2>Marca: ${item.marca}</h2>
        <p>Apellido: ${item.modelo}</p>
        <p>Correo: ${item.color}</p>
        <b>Contraseña: ${item.kilometros}</b>
        <h2>Marca: ${item.valor}</h2>
        <br>
      `;
        contenedor.append(li);
      });
    });