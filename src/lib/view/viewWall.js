export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    
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

    const inputPostear = document.createElement("input");
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


// /*post ya PUBLICADO ----- verde*/
//     const fondoPostPublicado = document.createElement("div");
//     fondoPostPublicado.className = "fondoPostPublicado";
//     fondoMuro.appendChild(fondoPostPublicado);
// /* post ya PUBLICADO -- blanco*/
//     const postPublicado = document.createElement("div");
//     postPublicado.className = "postPublicado";
//     fondoPostPublicado.appendChild(postPublicado);

//     const imgReceta = document.createElement("img");
//     imgReceta.src ='img/imgReceta.png';
//     imgReceta.className = "imgReceta";
//     postPublicado.appendChild(imgReceta);

//     const inputTextReceta = document.createElement("input");
//     inputTextReceta.className = "inputTextReceta";
//     inputTextReceta.placeholder = "Pasta untable de brócoli. Brócoli cocido, un diente de ajo, hierbas aromáticas (usé apio y tomillo), sal, limón y un chorro generoso de aceite. Todo a la Minipimer y listo.";
//     postPublicado.appendChild(inputTextReceta)

//     const divBtnPublicado = document.createElement("div");
//     divBtnPublicado.className = "divBtnPublicado";
//     fondoPostPublicado.appendChild(divBtnPublicado);

//     const imgLike = document.createElement("img");
//     imgLike.src ='img/imgLike.png';
//     imgLike.className = "imgLike";
//     divBtnPublicado.appendChild(imgLike);

//     const imgDelete = document.createElement("img");
//     imgDelete.src ='img/imgDelete.png';
//     imgDelete.className = "imgDelete";
//     divBtnPublicado.appendChild(imgDelete);
    
//     const btnComentar = document.createElement("button");
//     btnComentar.className = "btnComentar"
//     btnComentar.innerText = "Comentar"
//     divBtnPublicado.appendChild(btnComentar);

    /* Comentario*/

    /*COMENTARIO ----- verde*/
    // const fondoComentario = document.createElement("div");
    // fondoComentario.className = "fondoComentario";
    // fondoMuro.appendChild(fondoComentario);
    
    // const comentario = document.createElement("div");
    // comentario.className = "comentario";
    // fondoComentario.appendChild(comentario);

    // const imgPerfilComentario = document.createElement("img");
    // imgPerfilComentario.src ='img/imgPerfilComentario.png';
    // imgPerfilComentario.className = "imgPerfilComentario";
    // comentario.appendChild(imgPerfilComentario);

    // const inputTextComentario = document.createElement("input");
    // inputTextComentario.className = "inputTextComentario";
    // inputTextComentario.placeholder = "Lo hice y quedó maravillosa!";
    // comentario.appendChild(inputTextComentario)

    // const imgDeleteComment = document.createElement("img");
    // imgDeleteComment.src ='img/imgDeleteComment.png';
    // imgDeleteComment.className = "imgDeleteComment";
    // comentario.appendChild(imgDeleteComment);

    const divBtnNavengacion = document.createElement("div");
    divBtnNavengacion.className = "divBarraNavegacion";
    mainWall.appendChild(divBtnNavengacion);

    const btnUsuario = document.createElement("button");
    btnUsuario.className = "imgUsuario";
    divBtnNavengacion.appendChild(btnUsuario);
    
    const btnCerrar = document.createElement("button");
    btnCerrar.className = "imgCerrar";
    divBtnNavengacion.appendChild(btnCerrar);

   
    btnUsuario.addEventListener("click", () => {
        window.location.href = '#/profile';
    })

    return mainWall;
}