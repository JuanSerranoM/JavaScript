function respuestaAutomatica(){
    document.write("<h1>Prueba del primer boton con JavaScript en VisualStudio</h1>");
    document.write('<input type="button" value="volver atras" onclick="location.reload()">');
}

function agregarTexto(){
    let div = document.getElementById("campoVacio");
    let nombre = prompt("Ingrese su nombre: ","Desconocido");
    const elementoP = document.createElement("p");

    if(nombre == "Desconocido"){
        elementoP.textContent = "No llenaste el espacio con tu nombre entonces te llamaremos " + nombre;
    }else{
        elementoP.textContent = "Hola " + nombre + ", gracias por decirnos tu nombre!"
    }

    div.appendChild(elementoP);
}

function comenzarJuego(){
    let tabla = document.getElementById("tabla");
    let fila = document.createElement("tr");
    fila.className = "fila";
    for(let i = 0; i < 6; i++){
        let celda = document.createElement("th");
        let campo = document.createElement("input");
        campo.type = "text";
        campo.className = "campo";
        celda.appendChild(campo);
        fila.appendChild(celda);
    } 
    tabla.appendChild(fila);
}

function resetJuego(){
    let tabla = document.getElementById("tabla");
    while (tabla.lastChild && tabla.lastChild.className == "fila") {
        tabla.removeChild(tabla.lastChild);
    }
}

