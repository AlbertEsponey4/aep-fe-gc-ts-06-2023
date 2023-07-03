"use strict";
const defSexo = "H";
class Persona {
    constructor(nombre = "", edad = 0, DNI, sexo = defSexo, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
