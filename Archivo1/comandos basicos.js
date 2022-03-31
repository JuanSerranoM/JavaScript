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