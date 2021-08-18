import { loginGoogle, accederUsuario } from '../funciones.js';



export const login = () => {

    const mainLogin = document.createElement("div");
    mainLogin.className = "mainLogin";

    const fondoLogo = document.createElement("div");
    fondoLogo.className = "fondoLogo";
    mainLogin.appendChild(fondoLogo);

    const itemImg = document.createElement("img");
    itemImg.src = 'img/brocoli.png';
    itemImg.className = "imagen";
    fondoLogo.appendChild(itemImg);

    const saludo = document.createElement("div");
    saludo.className = "saludo";
    const textoSaludo = document.createTextNode("Hola, estás en la red social de recetas vegetarianas y/o veganas.");
    saludo.appendChild(textoSaludo);
    fondoLogo.appendChild(saludo);

    const fondoIniciarSesion = document.createElement("div");
    fondoIniciarSesion.className = "fondoIniciar";
    mainLogin.appendChild(fondoIniciarSesion);


    const parrafoInicio = document.createElement("h2");
    parrafoInicio.className = "parrafoInicio";
    const textoInicio = document.createTextNode("Inicia sesión en VeggieBook.");
    parrafoInicio.appendChild(textoInicio);
    fondoIniciarSesion.appendChild(parrafoInicio);


    const mailInput = document.createElement("input");
    mailInput.className = "inputMailLogin";
    mailInput.placeholder = "Ingresa tu correo";
    fondoIniciarSesion.appendChild(mailInput)

    const mailPassword = document.createElement("input");
    mailPassword.className = "inputPasswordLogin";
    mailPassword.placeholder = "Ingresa tu contraseña";
    mailPassword.type = "password"
    fondoIniciarSesion.appendChild(mailPassword)

    const btnIniciar = document.createElement("button");
    btnIniciar.className = "btnIniciar"
    btnIniciar.innerText = "Acceder"
    fondoIniciarSesion.appendChild(btnIniciar);

    //Boton de acceso con email y contraseña creadas
    btnIniciar.addEventListener('click', () => {
        accederUsuario();

    });

    const parrafoGoogle = document.createElement("p");
    parrafoGoogle.className = "parrafoGoogle";
    const textoGoogle = document.createTextNode("O entra con");
    parrafoGoogle.appendChild(textoGoogle);
    fondoIniciarSesion.appendChild(parrafoGoogle);

    const googleBoton = document.createElement("button");
    googleBoton.className = "googleBoton";
    fondoIniciarSesion.appendChild(googleBoton);

    //Boton de acceso con Google
    const btnGoogle = mainLogin.querySelector(".googleBoton");
    btnGoogle.addEventListener("click", () => {
        loginGoogle();
    });

    const divRegistro = document.createElement("div");
    divRegistro.className = "divRegistro";

    const parrafoRegistro = document.createElement("p");
    const textoRegistro = document.createTextNode("Aún no te registras?");
    parrafoRegistro.className = "parrafoRegistro";
    const parrafoRegistroAqui = document.createElement("a");
    const textoRegistroAqui = document.createTextNode("Hazlo aquí.");
    parrafoRegistroAqui.className = "parrafoRegistroAqui";
    parrafoRegistroAqui.setAttribute('href', '#/registro');
    parrafoRegistro.appendChild(textoRegistro);
    parrafoRegistroAqui.appendChild(textoRegistroAqui);
    divRegistro.appendChild(parrafoRegistro);
    divRegistro.appendChild(parrafoRegistroAqui);

    fondoIniciarSesion.appendChild(divRegistro);


    return mainLogin;
};