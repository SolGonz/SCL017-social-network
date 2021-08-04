
let db = firebase.firestore();  //llamamos a la base de datos de firestore


//función de registro
export const registrar = (emailRegistro, passwordRegistro, displayName) => {
  firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then(() => {
      db.collection('users').add({
        userId: firebase.auth.currentUser.uid,
        userName: displayName,
        userEmail: emailRegistro,
        });
       // Obtenemos el usuario creado
       const user = firebase.auth().currentUser
      // // Actualizamos el perfil del usuario con el nombre que ingresò y su preferencia de dieta de alimentaciòn.
      // user.updateProfile({displayName})
      .catch((error) => 
        console.log({ error }))
        user.sendEmailVerification().then(() => {
                  alert('Te enviamos un mail de verificacion')
              }).catch((error) => {
                  console.log({ error })
              })
          })
          .catch((error) => {
              console.log({ error })
          })
};

//Acceso con Google
export const loginGoogle = () =>{
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
.signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    window.location.href = '#/wall';
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    
  });
};

//Acesso con correo y contraseña registradas
export const accederUsuario = () =>{
  
  const emailLogin = document.querySelector('.inputMailLogin').value;
  const passwordLogin = document.querySelector('.inputPasswordLogin').value;

firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href = '#/wall'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    alert("Datos incorrectos")
  });
};

//observador
export const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario activo");
      console.log(user.email);
      console.log(user.displayName);
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(emailVerified);
      console.log(uid);
      // ...
    } else {
      //usuario no esta logueado
      console.log("usuaario inactivo")
    }
  });
  observador();

}

export const logout = () => {
  firebase.auth().signOut()
      .then(() => {
        window.location.href = '#/login'
      })
      .catch((error) => {
          console.error(error);
      });
};

export const dataBase = () => {

  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};
