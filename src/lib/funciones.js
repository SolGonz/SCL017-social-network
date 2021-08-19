
//Login con google  
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      observador();

      window.location.href = '#/wall';
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      alert(errorCode, errorMessage, email, credential);
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
      alert(errorCode, errorMessage);
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
      alert(errorMessage, errorCode);
    });
};

export const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      let uid = user.uid;
      console.log("usuario activo");
      console.log(uid);
      // ...
    } else {
      console.log("usuario inactivo")
    }
  });
}
