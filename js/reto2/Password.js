"use strict";
const deflongitud = 8;
class Password {
    constructor() {
        this.contra = this.generarContra();
        this.longitud = deflongitud;
    }
    generarContra() {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let contra = "";
        for (let i = 0; i < 8; i++) {
            let posicionCaracter = Math.floor(Math.random() * caracteres.length); //numero aleatorio entre 0 y caracteres.lenght
            contra += caracteres.charAt(posicionCaracter); //caracteres.charAt(indice) se usa para recibir el caracter en la posicion random que hemos sacado en la linea anterior
        }
        return contra;
    }
}
