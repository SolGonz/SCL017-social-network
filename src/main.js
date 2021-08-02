// Este es el punto de entrada de tu aplicacion

import { route } from "./lib/routes.js";

window.addEventListener("load", () => {
  route(window.location.hash);
  });
  
  window.addEventListener("hashchange", () => {
    route(window.location.hash);
  });
