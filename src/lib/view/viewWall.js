import { getPost, savePost } from "../funcionesWall.js";

export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";

    const fondoLogoWall = document.createElement("div");
    fondoLogoWall.className = "fondoLogoWall";
    mainWall.appendChild(fondoLogoWall);

    const imgLogoWall = document.createElement("img");
    imgLogoWall.src = 'img/brocoli.png';
    imgLogoWall.className = "imgLogoWall";
    fondoLogoWall.appendChild(imgLogoWall);

    const tituloMuro = document.createElement("div");
    tituloMuro.className = "tituloMuro";
    const textoTituloMuro = document.createTextNode("Muro");
    tituloMuro.appendChild(textoTituloMuro);
    fondoLogoWall.appendChild(tituloMuro);

    //Barra de navegación desktop
    const barraNavDesktop = document.createElement("div");
    barraNavDesktop.className = "NavDesktop";
    fondoLogoWall.appendChild(barraNavDesktop);
  
    const btnUsuarioDesk = document.createElement("button");
    btnUsuarioDesk.innerText = "Perfil"
    btnUsuarioDesk.className = "imgUsuarioDesk";
    barraNavDesktop.appendChild(btnUsuarioDesk);
  
    const btnCerrarDesk = document.createElement("button");
    btnCerrarDesk.className = "imgCerrarDesk";
    barraNavDesktop.appendChild(btnCerrarDesk);

    btnCerrarDesk.addEventListener("click", () => {
        firebase.auth().signOut()
            .then(() => {
                window.location.href = '#/login'
            });
    });


    const fondoMuro = document.createElement("div");
    fondoMuro.className = "fondoMuro";
    mainWall.appendChild(fondoMuro);
    /*frame verde oscuro*/
    const frameFondoPostear = document.createElement("div");
    frameFondoPostear.className = "frameFondoPostear";
    fondoMuro.appendChild(frameFondoPostear);
    /* frame blanco*/
    const postear = document.createElement("form");
    postear.className = "postear";
    frameFondoPostear.appendChild(postear);

    const inputPostear = document.createElement("input");
    inputPostear.className = "inputPostear";
    inputPostear.type = "text"
    inputPostear.placeholder = "¿Qué quieres escribir?";
    postear.appendChild(inputPostear)


    const btnPostear = document.createElement("button");
    btnPostear.className = "btnPostear"
    btnPostear.innerText = "Postear"
    postear.appendChild(btnPostear);

    //contenedor de los post
    const postContainer = document.createElement("div");
    postContainer.className = "postContainer";
    postContainer.id = "postContainer";
    fondoMuro.appendChild(postContainer);

    let idPostEdit = 0;

    //comenzamos con las funciones de post
    postear.addEventListener('submit', (e) => {
        e.preventDefault();
        const postMessage = mainWall.querySelector('.inputPostear');
        if (postMessage.value === "") {
            alert("Debes escribir tu receta antes de enviar el post")
        }
        else {
            savePost(postMessage.value);
            postear.reset();
        }
    });

    getPost();



    //Barra de navegación inferior mobile
    const divBtnNavengacion = document.createElement("div");
    divBtnNavengacion.className = "divBtnNavengacion";
    mainWall.appendChild(divBtnNavengacion);

    const btnUsuario = document.createElement("button");
    btnUsuario.className = "imgUsuario";
    divBtnNavengacion.appendChild(btnUsuario);

    const btnCerrar = document.createElement("button");
    btnCerrar.className = "imgCerrar";
    divBtnNavengacion.appendChild(btnCerrar);

    btnUsuario.addEventListener("click", () => {
        // Obtengo todos los campos que puso la usuaria
        window.location.href = '#/profile';

    });
    btnCerrar.addEventListener("click", () => {
        firebase.auth().signOut()
            .then(() => {
                window.location.href = '#/login'
            });
    });

    return mainWall;
}