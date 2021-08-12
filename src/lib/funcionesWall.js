var db = firebase.firestore();


    //guardando post en la coleccion de firebase
export const savePost = (postMessage ) => {
        const user = firebase.auth().currentUser;
        db.collection('post').add({
            name: user.displayName,
            post: postMessage,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            userId: user.uid,
            like:0,
        })
  };

    //obtener coleccion de post e ir pintando en postContainer
   export const getPost = () => db.collection('post')
   .orderBy('date', 'desc')
   .onSnapshot((querySnapshot) =>{
        postContainer.innerHTML = '';
        //recorremos la coleccion de post en firebase y se crea la chingada 
        querySnapshot.forEach((doc) => {
            postContainer.innerHTML += `
            <div class="container-post">
                <h3>Por: ${doc.data().name} </h3>
                <div class="container-receta">    
                    <p>${doc.data().post}</p>        
                </div>
            </div>  ` ;

            //si el id guardado al crear el post coincide con  el del usuario logueado se muestran botones editar y borrar
            if (doc.data().userId ==  firebase.auth().currentUser.uid){
                postContainer.innerHTML += `
                    <button class="btn-editar">Editar Post</button>
                    <button class="btn-borrar" id='borrarPost' value='${doc.id}'></button>
                `;
                
                //botón que activa funcion borrar post
                const btnBorrar = document.querySelectorAll('#borrarPost');
                btnBorrar.forEach((item) => {
                  item.addEventListener('click', () => borrarPost(item.value));
                });
            };

        });
 
    });

    // Funcion que borra los post
    const borrarPost = (idPost) => {
        // console.log(idPost)
        db.collection("post").doc(idPost).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


