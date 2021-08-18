import { login } from "./view/viewLogin.js";
import { registro } from "./view/viewRegistro.js";
import { wall } from "./view/viewWall.js";
import { profile } from "./view/viewEditProfile.js";

export const route = (hash) => {
    if (hash === '#/') {
        return showView(hash);
    } if (hash === '#/login') {
        return showView(hash);
    } if (hash === '#/registro') {
        return showView(hash);
    } if (hash === '#/wall') {
        return showView(hash);
    }
    if (hash === '#/profile') {
        return showView(hash);
    }
    return showView(hash);
};

const showView = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    switch (hash) {
        case '':
            containerRoot.appendChild(login());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/registro':
            containerRoot.appendChild(registro());
            break
        case '#/wall':
            //funcion observador
            firebase.auth().onAuthStateChanged((user) => {
                //si usuario esta activo pasa esto
                if (user) {
                    containerRoot.appendChild(wall());
                    //si no esta activo se mantiene en login
                } else {
                    window.location.href = '#/login';
                }
            });
            break
        case '#/profile':
            //funcion observador
            firebase.auth().onAuthStateChanged((user) => {
                //si usuario esta activo pasa esto
                if (user) {
                    containerRoot.appendChild(profile());
                    //si no esta activo se mantiene en login
                } else {
                    window.location.href = '#/login';
                }
            });
            break
        default:
            containerRoot.innerHTML = '<h2>Página no encontrada :( :( </h2>';

    }
};