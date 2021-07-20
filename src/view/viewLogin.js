export const login = () => {

    const mainLogin = document.createElement("div");
    mainLogin.className = "mainlogin";

    const fondoLogo = document.createElement("div");
    fondoLogo.className = "fondologo";
    mainLogin.appendChild(fondoLogo);

    const itemImg = document.createElement("img");
    itemImg.src ='/img/brocoli.png';
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


    const parrafoInicio = document.createElement("div")
    parrafoInicio.className = "parrafoInicio";
    const textoInicio = document.createTextNode("Inicia sesión en VeggieBook.");
    parrafoInicio.appendChild(textoInicio);


    const mailInput = document.createElement("input");
    mailInput.className = "inputLogin";
    mailInput.placeholder = "Ingresa tu correo...";
    parrafoInicio.appendChild(mailInput)

    const mailPassword = document.createElement("input");
    mailPassword.className = "inputLogin";
    mailPassword.placeholder = "Ingresa tu contraseña...";
    mailPassword.type = "password"
    parrafoInicio.appendChild(mailPassword)

    const btnIniciar = document.createElement("button");
    btnIniciar.className = "btnIniciar"
    btnIniciar.innerText = "Iniciar sesión"
    parrafoInicio.appendChild(btnIniciar)

    fondoIniciarSesion.appendChild(parrafoInicio);

    document.getElementById("root").appendChild(mainLogin)
}
