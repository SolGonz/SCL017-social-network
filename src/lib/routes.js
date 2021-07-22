import { login } from "./view/viewLogin.js";
import { registro } from "./view/viewRegistro.js";

export const route = (hash) => {
if ( hash === '#/'){
    return showView(hash);
} if (hash === '#/login'){
    return showView(hash);
} if (hash === '#/registro'){
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
        case '#/':
            containerRoot.appendChild(login());
            break;
        case '#/registro':
            containerRoot.appendChild(registro());
            break
        default:
            containerRoot.innerHTML = '<h2>Página no encontrada :( :( </h2>';
        
    }
};