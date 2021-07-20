export const login = () => {
    const mainLogin = document.createElement("div");
    mainLogin.className = "mainlogin";

    const fondoLogo = document.createElement("div");
    fondoLogo.className = "fondologo";
    mainLogin.appendChild(fondoLogo);

    const itemImg = document.createElement("img");
    itemImg.src ='/src/img/brocoli.png';
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
    mailInput.className = "inputMail";
    mailInput.placeholder = "Ingresa tu correo";
    fondoIniciarSesion.appendChild(mailInput)

    const mailPassword = document.createElement("input");
    mailPassword.className = "inputPassword";
    mailPassword.placeholder = "Ingresa tu contraseña";
    mailPassword.type = "password"
    fondoIniciarSesion.appendChild(mailPassword)

    const btnIniciar = document.createElement("button");
    btnIniciar.className = "btnIniciar"
    btnIniciar.innerText = "Iniciar sesión"
    fondoIniciarSesion.appendChild(btnIniciar);

    const parrafoGoogle = document.createElement("p");
    parrafoGoogle.className = "parrafoGoogle";
    const textoGoogle = document.createTextNode("O entra con");
    parrafoGoogle.appendChild(textoGoogle);
    fondoIniciarSesion.appendChild(parrafoGoogle);

    const googleBoton = document.createElement("button");
    googleBoton.className = "googleBoton";
    fondoIniciarSesion.appendChild(googleBoton);

    const parrafoRegistro = document.createElement("p");
    parrafoRegistro.className = "parrafoRegistro";
    const textoRegistro = document.createTextNode("Aun no te registas?");
    parrafoRegistro.appendChild(textoRegistro);
    fondoIniciarSesion.appendChild(parrafoRegistro);

    

    document.getElementById("root").appendChild(mainLogin);
}
