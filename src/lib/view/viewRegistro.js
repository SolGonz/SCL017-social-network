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
    btnRegistro.addEventListener("click", () => {
        // Obtengo todos los campos que puso la usuaria
        const displayName = mainRegistro.querySelector(".inputNombre").value;
        const correo = mainRegistro.querySelector(".inputCorreo").value;
        const password = mainRegistro.querySelector(".inputPassword").value;
        const dieta = mainRegistro.querySelector(".selectDieta").value;

        // Registro con correo y contraseña
        firebase
            .auth()
            .createUserWithEmailAndPassword(correo, password)
            .then(() => {
                // Obtenemos el usuario creado
                const user = firebase.auth().currentUser
                // Actualizamos el perfil del usuario con el nombre que ingresò y su preferencia de dieta de alimentaciòn.
                user.updateProfile({
                    displayName
                }).catch((error) => console.log({ error }))
                user.sendEmailVerification().then(() => {
                    alert('Te enviamos un mail de verificacion')
                }).catch((error) => {
                    console.log({ error })
                })
            })
            .catch((error) => {
                console.log({ error })
            })

        /* firebase.auth().signInWithEmailAndPassword(correo, password).then(user => {
            console.log({
                user
            })
            console.log({
                currentUser: firebase.auth().currentUser
            })
        }) */
    })

    return mainRegistro;
}