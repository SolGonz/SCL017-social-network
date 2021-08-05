var db = firebase.firestore();


//Login con google
export const loginGoogle = () =>{
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
.signInWithPopup(provider)
  .then((result) => {
    
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = '#/wall';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
};

 // Registro con correo y contraseña
export const registrar = (emailRegistro, passwordRegistro, userName) => {
    firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
      .then(() => {
         // Obtenemos el usuario creado
         const user = firebase.auth().currentUser;

          // Actualizamos el perfil del usuario con el nombre que ingresó
        user.updateProfile({displayName: userName});

        db.collection("users").add({
          nombre: "hola",
          email: "email",
          idUsuario: "id",
          fotoUsuario: '/src/img/brocoli.png'
        })
            })
            .catch((error) => {
                console.log({ error })
            })
};

export const accederUsuario = () =>{
  
  const emailLogin = document.querySelector('.inputMailLogin').value;
  const passwordLogin = document.querySelector('.inputPasswordLogin').value;

firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log(user)
    window.location.href = '#/wall'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    alert("Datos incorrectos")
  });
};

export const observador = () =>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var displayName = user.displayName;
      console.log(displayName);
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymus = user.isAnonymus;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(uid);
      // ...
    } else {
      console.log("no existe usuario activo")
    }
  });

}
