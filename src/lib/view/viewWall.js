export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    
    /*const textoHola = document.createTextNode("soy el muro");
    hola.appendChild(textoHola);
    mainWall.appendChild(hola);*/
    
    const fondoLogoWall = document.createElement("div");
    fondoLogoWall.className = "fondoLogoWall";
    mainWall.appendChild(fondoLogoWall);
    
    const itemImg = document.createElement("img");
    itemImg.src ='img/brocoli.png';
    itemImg.className = "imagen";
    fondoLogoWall.appendChild(itemImg);

    const tituloMuro = document.createElement("div");
    tituloMuro.className = "tituloMuro";
    const textoTituloMuro = document.createTextNode("Muro");
    tituloMuro.appendChild(textoTituloMuro);
    fondoLogoWall.appendChild(tituloMuro);
    
    const fondoMuro = document.createElement("div");
    fondoMuro.className = "fondoMuro";
    mainWall.appendChild(fondoMuro);
 /*frame verde oscuro*/
    const framePostear = document.createElement("div");
    framePostear.className = "framePostear";
    fondoMuro.appendChild(framePostear);
/* frame blanco*/
    const postear = document.createElement("div");
    postear.className = "postear";
    framePostear.appendChild(postear);

    const postearImg = document.createElement("div");
    itemImg.src ='img/postearImg.png';
    postearImg.className = "postearImg";
    postear.appendChild(postearImg);

    const inputPostear = document.createElement("input");
    inputPostear.className = "inputPostear";
    inputPostear.placeholder = "¿Qué receta quieres escribir?";
    postear.appendChild(inputPostear)
    
    const btnPostear = document.createElement("button");
    btnPostear.className = "btnPostear"
    btnPostear.innerText = "Postear"
    framePostear.appendChild(btnPostear);

    return mainWall;
}