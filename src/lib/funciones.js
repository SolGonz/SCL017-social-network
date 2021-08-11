var db = firebase.firestore();


//Login con google
export const loginGoogle = () =>{
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
.signInWithPopup(provider)
  .then((result) => {
    observador()
    const user = result.user;
    
    window.location.href = '#/wall';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    alert(errorCode, errorMessage, email, credential)
    // ...
  });
};

 // Registro con correo y contraseña
 export const registrar = () => {
  const emailRegistro = document.querySelector('.inputCorreoRegistro').value;
  const passwordRegistro = document.querySelector('.inputPasswordRegistro').value;
  const username = document.querySelector('.inputNombre').value;
  

  firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
      // const user = userCredential.user;
      window.location.href = '#/wall'; 
      userCredential.user.updateProfile({
        displayName: username,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};


//Login para acceder al muro
export const accederUsuario = () => {
  const emailLogin = document.querySelector('.inputMailLogin').value;
  const passwordLogin = document.querySelector('.inputPasswordLogin').value;


  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      window.location.href = '#/wall';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.location.href = '#/login';
      console.log(errorMessage, errorCode);
    });
};

export const observador = () =>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("usuario activo")
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
      console.log("usuario inactivo")
    }
  });

}

