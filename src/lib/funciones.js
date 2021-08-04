
let db = firebase.firestore();  //llamamos a la base de datos de firestore

export const loginGoogle = () =>{

  let provider = new firebase.auth.GoogleAuthProvider();
  
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
      
    });
  }
  

// //función de registro
// export const registrar = (emailRegistro, passwordRegistro, userName) => {
//   firebase
//   .auth()
//   .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
//     .then(() => {
//        const user = firebase.auth().currentUser
//        console.log(user)

//       // db.collection("users").add({
//       //   email: emailRegistro,
//       //   nombre: userName,
//       // )}
//           // Actualizamos el perfil del usuario con el nombre que ingresò
//       user.updateProfile({displayName:userName})
//       console.log(userName)

//       .then(function () {})
//       .catch(function (error) {
//         console.log(error);
//       });
//       user.sendEmailVerification()
//       .then(function () {
//         alert("Revisa tu correo para verificar tu email")
//       })
//           })
//           .catch((error) => {
//               console.log({ error })
//           })
// };

//Acceso con Google


// export const loginGoogle = () =>{
//   let provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
// }

//Acesso con correo y contraseña registradas
// export const accederUsuario = () =>{
  
//   const emailLogin = document.querySelector('.inputMailLogin').value;
//   const passwordLogin = document.querySelector('.inputPasswordLogin').value;

// firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//     window.location.href = '#/wall'
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     alert("Datos incorrectos")
//   });
// };

// //observador
// export const observador = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log("usuario activo");
//       console.log(user.email);
//       console.log(user.displayName);
//       const emailVerified = user.emailVerified;
//       const uid = user.uid;
//       console.log(emailVerified);
//       console.log(uid);
//       // ...
//     } else {
//       //usuario no esta logueado
//       console.log("usuaario inactivo")
//     }
//   });
//   observador();

// }

// export const logout = () => {
//   firebase.auth().signOut()
//       .then(() => {
//         window.location.href = '#/login'
//       })
//       .catch((error) => {
//           console.error(error);
//       });
// };

// export const dataBase = () => {

//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// };
