export const registro = () => {
    const mainRegistro = document.createElement("div");
    mainRegistro.className = "mainRegistro";

    const itemImg = document.createElement("img");
    itemImg.src ='img/brocoli.png';
    itemImg.className = "imagen";
    mainRegistro.appendChild(itemImg);

    // document.getElementById("root").appendChild(mainRegistro);
    return mainRegistro;
}