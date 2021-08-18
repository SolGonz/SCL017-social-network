export const profile = () => {
    const mainProfile = document.createElement("div");
    mainProfile.className = "mainProfile";

    const mainDatos = document.createElement("div");
    mainDatos.className = "mainDatos";
    mainProfile.appendChild(mainDatos);

    const divFoto = document.createElement("div");
    divFoto.className = "divFoto";
    mainDatos.appendChild(divFoto);

    const imgPerfil = document.createElement("img");
    imgPerfil.src = '';
    imgPerfil.alt = "foto de perfil"
    imgPerfil.className = "imgPerfil";
    imgPerfil.id = "fotoPerfil";

    divFoto.appendChild(imgPerfil);

    const divNombre = document.createElement("div");
    divNombre.className = "divNombre";
    mainDatos.appendChild(divNombre);

    const nombrePerfil = document.createElement("h2");
    nombrePerfil.id = "nombrePerfil";
    divNombre.appendChild(nombrePerfil);

    const divIntereses = document.createElement("div");
    divIntereses.className = "divIntereses";
    mainDatos.appendChild(divIntereses);

    const btnAtras = document.createElement("button");
    btnAtras.className = "btnAtras"
    btnAtras.innerText = "Vuelve atrás"
    mainProfile.appendChild(btnAtras);

    btnAtras.addEventListener("click", () => {
        window.location.href = '#/wall';

    });


    return mainProfile;
}