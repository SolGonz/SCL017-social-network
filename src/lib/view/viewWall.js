export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    
    /*const textoHola = document.createTextNode("soy el muro");
    hola.appendChild(textoHola);
    mainWall.appendChild(hola);*/
    
    const fondoLogoWall = document.createElement("div");
    fondoLogoWall.className = "fondoLogoWall";
    mainWall.appendChild(fondoLogoWall);
    
    const imgLogoWall = document.createElement("img");
    imgLogoWall.src ='img/brocoli.png';
    imgLogoWall.className = "imgLogoWall";
    fondoLogoWall.appendChild(imgLogoWall);

    const tituloMuro = document.createElement("div");
    tituloMuro.className = "tituloMuro";
    const textoTituloMuro = document.createTextNode("Muro");
    tituloMuro.appendChild(textoTituloMuro);
    fondoLogoWall.appendChild(tituloMuro);
    
    const fondoMuro = document.createElement("div");
    fondoMuro.className = "fondoMuro";
    mainWall.appendChild(fondoMuro);
 /*frame verde oscuro*/
    const frameFondoPostear = document.createElement("div");
    frameFondoPostear.className = "frameFondoPostear";
    fondoMuro.appendChild(frameFondoPostear);
/* frame blanco*/
    const postear = document.createElement("div");
    postear.className = "postear";
    frameFondoPostear.appendChild(postear);

    const postearImg = document.createElement("img");
    postearImg.src ='img/postearImg.png';
    postearImg.className = "postearImg";
    postear.appendChild(postearImg);

    const inputPostear = document.createElement("textarea");
    inputPostear.className = "inputPostear";
    inputPostear.placeholder = "¿Qué quieres escribir?";
    postear.appendChild(inputPostear)
    
    const divBtnPostear = document.createElement("div");
    divBtnPostear.className = "divBtnPostear";
    frameFondoPostear.appendChild(divBtnPostear);

    const btnPostear = document.createElement("button");
    btnPostear.className = "btnPostear"
    btnPostear.innerText = "Postear"
    divBtnPostear.appendChild(btnPostear);


    /* post ya PUBLICADO*/


/*post ya PUBLICADO ----- verde*/
    const fondoPostPublicado = document.createElement("div");
    fondoPostPublicado.className = "fondoPostPublicado";
    fondoMuro.appendChild(fondoPostPublicado);
/* post ya PUBLICADO -- blanco*/
    const datosReceta = document.createElement("div");
    datosReceta.className = "datosReceta";
    const textoReceta = document.createTextNode("Receta");
    datosReceta.appendChild(textoReceta);
    const datosNombre = document.createElement("p");
    datosNombre.className ="datosNombre";
    const textoNombreR = document.createTextNode("");
    datosNombre.appendChild(textoNombreR);
    datosReceta.appendChild(datosNombre);
    fondoPostPublicado.appendChild(datosReceta);

    const postPublicado = document.createElement("div");
    postPublicado.className = "postPublicado";
    fondoPostPublicado.appendChild(postPublicado);




    const imgReceta = document.createElement("img");
    imgReceta.src ='img/imgReceta.png';        
    imgReceta.className = "imgReceta";
    postPublicado.appendChild(imgReceta);

    const inputTextReceta = document.createElement("p");
    inputTextReceta.className = "inputTextReceta";
    inputTextReceta.innerText = "Pasta untable de brócoli. Brócoli cocido, un diente de ajo, hierbas aromáticas (usé apio y tomillo), sal, limón y un chorro generoso de aceite. Todo a la Minipimer y listo.";
    postPublicado.appendChild(inputTextReceta)

    const divBtnPublicado = document.createElement("div");
    divBtnPublicado.className = "divBtnPublicado";
    fondoPostPublicado.appendChild(divBtnPublicado);

    const imgLike = document.createElement("img");
    imgLike.src ='img/imgLike.png';
    imgLike.className = "imgLike";
    const btnLike = document.createElement("button");
    btnLike.className = "btnLike";
    btnLike.appendChild(imgLike);
    const txtLike = document.createElement("p");
    txtLike.innerText = "888 likes";
    btnLike.appendChild(txtLike);
    divBtnPublicado.appendChild(btnLike);

    const imgDelete = document.createElement("img");
    imgDelete.src ='img/imgDelete.png';
    imgDelete.className = "imgDelete";
    const btnDelete = document.createElement("button");
    btnDelete.className = "btnDelete";
    btnDelete.appendChild(imgDelete);
    const txtDelete = document.createElement("p");
    txtDelete.innerText = "Borrar";
    btnDelete.appendChild(txtDelete);
    divBtnPublicado.appendChild(btnDelete);
    
    /* const btnComentar = document.createElement("button");
    btnComentar.className = "btnComentar"
    btnComentar.innerText = "Comentar"
    divBtnPublicado.appendChild(btnComentar); */

    /* Comentario*/

    /*COMENTARIO ----- verde*/
    const divComentario = document.createElement("div");
    divComentario.className = "divComentario";
    fondoPostPublicado.appendChild(divComentario);

    /*INPUT -------- blanco*/
    const inputComentario = document.createElement("textarea");
    inputComentario.placeholder = "Escribe aquí tu comentario...";
    inputComentario.className = "inputComentario";
    inputComentario.rows = 3;
    divComentario.appendChild(inputComentario);

    /*TEXTO COMENTARIOS ----------- negro*/
    const txtComentario = document.createElement("p")
    txtComentario.innerText = "Comentarios";
    txtComentario.className = "txtComentario";
    divComentario.appendChild(txtComentario);
    
    const comentario = document.createElement("div");
    comentario.className = "comentario";
    divComentario.appendChild(comentario);

    const imgPerfilComentario = document.createElement("img");
    imgPerfilComentario.src ='img/imgPerfilComentario.png';
    imgPerfilComentario.className = "imgPerfilComentario";
    comentario.appendChild(imgPerfilComentario);

    const textosComentario = document.createElement("div")
    textosComentario.className = "textosComentario"
    comentario.appendChild(textosComentario);

    const txtAutorComentario = document.createElement("p");
    txtAutorComentario.className = "txtAutorComentario";
    txtAutorComentario.innerText = "Sofia Canales Moya";
    textosComentario.appendChild(txtAutorComentario)

    const inputTextComentario = document.createElement("p");
    inputTextComentario.className = "inputTextComentario";
    inputTextComentario.innerText = "Lo hice y quedó maravillosa!";
    textosComentario.appendChild(inputTextComentario)

    const btnDeleteComment = document.createElement("button");
    btnDeleteComment.className = "imgDeleteComment";
    const imgDeleteComment = document.createElement("img");
    imgDeleteComment.src ='img/imgDeleteComment.png';
    btnDeleteComment.appendChild(imgDeleteComment);
    textosComentario.appendChild(btnDeleteComment);

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


    return mainWall;
}