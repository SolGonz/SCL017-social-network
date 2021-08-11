import { registrar } from "../funciones.js";


export const registro = () => {
    const mainRegistro = document.createElement("div");
    mainRegistro.className = "mainRegistro";

    const fondoLogoRegistro = document.createElement("div");
    fondoLogoRegistro.className = "fondoLogoRegistro";
    mainRegistro.appendChild(fondoLogoRegistro);

    const itemImg = document.createElement("img");
    itemImg.src = 'img/brocoli.png';
    itemImg.className = "imagen";
    fondoLogoRegistro.appendChild(itemImg);

    const tituloRegistro = document.createElement("div");
    tituloRegistro.className = "tituloRegistro";
    const textoTitulo = document.createTextNode("Regístrate");
    tituloRegistro.appendChild(textoTitulo);
    fondoLogoRegistro.appendChild(tituloRegistro);

    const fondoRegistrarse = document.createElement("form");
    fondoRegistrarse.className = "fondoRegistrarse";
    mainRegistro.appendChild(fondoRegistrarse);

    const textoNombre = document.createTextNode("Nombre");
    fondoRegistrarse.appendChild(textoNombre);
    textoNombre.className = "textoNombre";
    const inputNombre = document.createElement("input");
    inputNombre.className = "inputNombre";
    inputNombre.placeholder = "Ingresa tu nombre";
    fondoRegistrarse.appendChild(inputNombre)

    const textoCorreo = document.createTextNode("Correo electrónico");
    fondoRegistrarse.appendChild(textoCorreo);

    textoCorreo.className = "textoCorreo";
    const inputCorreo = document.createElement("input");
    inputCorreo.className = "inputCorreoRegistro";
    inputCorreo.placeholder = "Ingresa tu correo";
    fondoRegistrarse.appendChild(inputCorreo);

    const textoContraseña = document.createTextNode("Contraseña");
    fondoRegistrarse.appendChild(textoContraseña);

    textoCorreo.className = "textoContraseña";
    const mailPassword = document.createElement("input");
    mailPassword.className = "inputPasswordRegistro";
    mailPassword.placeholder = "Ingresa tu contraseña";
    mailPassword.type = "password"
    fondoRegistrarse.appendChild(mailPassword);

    const textoDieta = document.createTextNode("¿Qué dieta sigues?");
    fondoRegistrarse.appendChild(textoDieta);

    textoDieta.className = "textoDieta";
    const selectDieta = document.createElement("select");
    selectDieta.className = "selectDieta";
    selectDieta.id = "selectD";
    const optionCero = document.createElement("option");
    optionCero.value = 'Selecciona tu dieta';
    optionCero.text = "Seleciona tu dieta";
    const optionUno = document.createElement("option");
    optionUno.value = 'Vegetariana';
    optionUno.text = "Vegetariana";
    const optionDos = document.createElement("option");
    optionDos.value = 'Vegana';
    optionDos.text = "Vegana";
    const optionTres = document.createElement("option");
    optionTres.value = 'No me identifico con ninguna';
    optionTres.text = "No me identifico con ninguna";
    selectDieta.appendChild(optionCero);
    selectDieta.appendChild(optionUno);
    selectDieta.appendChild(optionDos);
    selectDieta.appendChild(optionTres);
    fondoRegistrarse.appendChild(selectDieta);

    mainRegistro.appendChild(fondoRegistrarse);

    const btnRegistro = document.createElement("button");
    btnRegistro.className = "btnRegistro"
    btnRegistro.innerText = "Registrarme"
    fondoRegistrarse.appendChild(btnRegistro);

    btnRegistro.addEventListener("click", () => {
        registrar();

    });
    return mainRegistro;
}