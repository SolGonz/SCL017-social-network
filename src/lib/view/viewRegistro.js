

export const registro = () => {
    const mainRegistro = document.createElement("div");
    mainRegistro.className = "mainRegistro";

    const itemImagen = document.createElement("img");
    itemImagen.src = '/img/brocoli.png';
    itemImagen.className = "itemImagen";
    mainRegistro.appendChild(itemImagen);

    const tituloRegistro = document.createElement("div");
    tituloRegistro.className = "tituloRegistro";
    const textoTitulo = document.createTextNode("Regístrate");
    tituloRegistro.appendChild(textoTitulo);
    mainRegistro.appendChild(tituloRegistro);

    const datos = document.createElement("div");
    datos.className = "datos";
        const textoNombre = document.createTextNode("Nombre");
        datos.appendChild(textoNombre);
        textoNombre.className = "textoNombre";
            const inputNombre = document.createElement("input");
            inputNombre.className = "inputNombre";
            inputNombre.placeholder = "Ingresa tu nombre";
            datos.appendChild(inputNombre)
        const textoCorreo = document.createTextNode("Correo electrónico");
        datos.appendChild(textoCorreo);
        textoCorreo.className = "textoCorreo";
            const inputCorreo = document.createElement("input");
            inputCorreo.className = "inputCorreo";
            inputCorreo.placeholder = "Ingresa tu correo";
            datos.appendChild(inputCorreo);
        const textoContraseña = document.createTextNode("Contraseña");
        datos.appendChild(textoContraseña);
        textoCorreo.className = "textoContraseña";
            const mailPassword = document.createElement("input");
            mailPassword.className = "inputPassword";
            mailPassword.placeholder = "Ingresa tu contraseña";
            mailPassword.type = "password"
            datos.appendChild(mailPassword);
        const textoDieta = document.createTextNode("¿Qué dieta sigues?");
        datos.appendChild(textoDieta);
        textoDieta.className = "textoDieta";
            const selectDieta = document.createElement("select");
            selectDieta.className = "selectDieta";
            selectDieta.id= "selectD";
            const optionCero = document.createElement("option");
            optionCero.value = 'Dieta';
            optionCero.text = "Dieta";
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
         datos.appendChild(selectDieta);
    mainRegistro.appendChild(datos);

    const btnRegistro = document.createElement("button");
    btnRegistro.className = "btnRegistro"
    btnRegistro.innerText = "Registrarme"
    mainRegistro.appendChild(btnRegistro);

    btnRegistro.addEventListener('click', ()=>{
        const email = document.querySelector('.inputCorreo').value;
        const password = document.querySelector('.inputPassword').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
        var user = userCredential.user;
           // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
              // ..
            });
          
          
    });

    return mainRegistro;
}