

var db = firebase.firestore();

export const wall = () => {
    const mainWall = document.createElement("div");
    mainWall.className = "mainWall";
    const hola = document.createElement("p");
    
    const fondoLogoWall = document.createElement("div");
    fondoLogoWall.className = "fondoLogoWall";
    mainWall.appendChild(fondoLogoWall);

        //Barra de navegación desktop
        const barraNavDesktop = document.createElement("div");
        barraNavDesktop.className = "NavDesktop";
        fondoLogoWall.appendChild(barraNavDesktop);
    
        const btnUsuarioDesk = document.createElement("button");
        btnUsuarioDesk.className = "imgUsuarioDesk";
        barraNavDesktop.appendChild(btnUsuarioDesk);
        
        const btnCerrarDesk = document.createElement("button");
        btnCerrarDesk.className = "imgCerrarDesk";
        barraNavDesktop.appendChild(btnCerrarDesk);

    
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
    const postear = document.createElement("form");
    postear.className = "postear";
    frameFondoPostear.appendChild(postear);

    const postearImg = document.createElement("img");
    postearImg.src ='img/postearImg.png';
    postearImg.className = "postearImg";
    postear.appendChild(postearImg);

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



    //comenzamos con las funciones de post
    postear.addEventListener('submit',  async(e) =>{
        e.preventDefault();
        const postMessage = mainWall.querySelector('.inputPostear');
        if (postMessage.value === "") {
            alert("Debes escribir tu receta antes de enviar el post")
        }     
        else {
            await savePost(postMessage.value);
             postear.reset();
        }
    });

    //guardando post en la coleccion de firebase
    const savePost = (postMessage ) =>
        db.collection('post').doc().set({
            post: postMessage,
        });  

    //obtener collecion de post e ir pintando en postContainer
    const getPost = () => db.collection('post').onSnapshot((querySnapshot) =>{
        postContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().post}`);
            postContainer.innerHTML += `
            <div class="container-post">
                <div class="container-receta">    
                    <p>${doc.data().post}</p>        
                </div>
                <button>Hola</button>
                <button>Adios</button>
            </div>  ` 
        });
    });
     getPost();



    //Barra de navegación inferior
    const divBtnNavengacion = document.createElement("div");
    divBtnNavengacion.className = "divBtnNavengacion";
    fondoMuro.appendChild(divBtnNavengacion);

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