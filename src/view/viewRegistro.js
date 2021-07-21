export const registro = () => {
    const mainRegistro = document.createElement("div");
    mainRegistro.className = "mainRegistro";

    const itemImg = document.createElement("img");
    itemImg.src = 'src/img/brocoli.png';
    itemImg.className = "imagen";
    mainRegistro.appendChild(itemImg);

    const tituloRegistro = document.createElement("div");
    tituloRegistro.className = "tituloRegistro";
    const textoTitulo = document.createTextNode("Regístrate");
    tituloRegistro.appendChild(textoTitulo);
    
    const datos = document.createElement("div");
    datos.className = "datos";
    const textoNombre = document.createTextNode("Nombre");
    datos.appendChild(textoNombre);
    mainRegistro.appendChild(datos);

     // document.getElementById("root").appendChild(mainRegistro);
}