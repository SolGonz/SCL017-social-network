
var db = firebase.firestore();
let idPostEdit = 0;

    //guardando post en la coleccion de firebase
export const savePost = (postMessage ) => {
        const user = firebase.auth().currentUser;
        if (idPostEdit === 0){
        db.collection('post').add({
            name: user.displayName,
            post: postMessage,
            date: (new Date().toLocaleDateString('day', 'month', 'year')),
            like:0,
        })
        // .then((docRef) => {
		// 	console.log('Document written with ID: ', docRef.id);
		// 	document.getElementById('postMessage').value = '';
		// 	getPost();
		//   })
        //   .catch((error) => {
		// 	console.error('Error adding document: ', error);
		//   });
    } else {
		const editPost = db.collection('post').doc(editPost);
		editPost.update({
		  post: postMessage,
		  date: (new Date().toLocaleDateString('day', 'month', 'year')),
		})
		//   .then(() => {
		// 	console.log('Document successfully updated!');
		// 	document.getElementById('writePost').value = '';
		// 	getPost();
		// 	idEditPost = 0;
		//   })
		//   .catch((error) => {
		// 	console.error('Error updating document: ', error);
		//   });
	  }
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
                <button post-idfire=${doc.id} id="btn-editar">Editar</button>
                <button post-idfire=${doc.id} id="btn-borrar">Borrar</button>
            </div>  ` ;
            const btnBorrar = document.getElementById("btn-borrar");
                    btnBorrar.addEventListener('click', (e) => {
                    });

        });
 
    });

    const borrarPost = (idPost) => {
        // console.log(idPost)
        db.collection("post").doc(idPost).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

