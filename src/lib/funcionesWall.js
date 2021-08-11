var db = firebase.firestore();


    //guardando post en la coleccion de firebase
export const savePost = (postMessage ) => {
        const user = firebase.auth().currentUser;
        db.collection('post').add({
            name: user.displayName,
            post: postMessage,
            date: (new Date().toLocaleDateString('day', 'month', 'year')),
            like:0,
        })
  };

    //obtener coleccion de post e ir pintando en postContainer
   export const getPost = () => db.collection('post').onSnapshot((querySnapshot) =>{
        postContainer.innerHTML = '';
        //recorremos la coleccion de post en firebase y se van creando en postContainer
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().post}`);
            postContainer.innerHTML += `
            <div class="container-post">
                <h3>Por: ${doc.data().name} </h3>
                <div class="container-receta">    
                    <p>${doc.data().post}</p>        
                </div>
                <button>Hola</button>
                <button post-idfire=${doc.id} id="btn-borrar">Borrar</button>
            </div>  ` ;
            const btnBorrar = document.getElementById("btn-borrar");
                    btnBorrar.addEventListener('click', (e) => {
                        const element = e.target
                        const idPost = element.getAttribute("post-idfire")
                        borrarPost(idPost)
                    });

        });
 
    });

    //Funcion que borra los post
    const borrarPost = (idPost) => {
        // console.log(idPost)
        db.collection("post").doc(idPost).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

