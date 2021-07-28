import { wall } from "./view/viewWall.js";

export const loginGoogle = () =>{

let provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
.signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export const accederUsuario = () =>{
  
  const emailLoginUsuario = document.querySelector('.inputMailLogin').value;
  const passwordLoginUsuario = document.querySelector('.inputPasswordLogin').value;


firebase.auth().signInWithEmailAndPassword(emailLoginUsuario, passwordLoginUsuario)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log(user)
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