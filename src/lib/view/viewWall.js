export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    const textoHola = document.createTextNode("soy el muro");
    hola.appendChild(textoHola);
    mainWall.appendChild(hola);

    return mainWall;
}