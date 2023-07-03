"use strict";
const defPrecioBase = 100;
const defColor = "blanco";
const defConsumo = "F";
const defPeso = 5;
class Electrodomestico {
    constructor(precioBase = defPrecioBase, color = defColor, consumo = defConsumo, peso = defPeso) {
        this.precioBase = precioBase;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;
    }
    get getPrecioBase() {
        return this.precioBase;
    }
    get getColor() {
        return this.color;
    }
    get getConsumo() {
        return this.consumo;
    }
    get getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        if (letra === "A" || letra === "B" || letra === "C" || letra === "D" || letra === "E" || letra === "F") {
            return true;
        }
        else {
            return false;
        }
    }
    comprobarColor(color) {
        if (color === "blanco" || color === "negro" || color === "rojo" || color === "azul" || color === "gris") {
            return true;
        }
        else if (color === "BLANCO" || color === "NEGRO" || color === "ROJO" || color === "AZUL" || color === "GRIS") {
            return true;
        }
        else {
            return false;
        }
    }
    precioFinal() {
        let precio = this.precioBase;
        switch (this.consumo) {
            case "A":
                precio += 100;
                break;
            case "B":
                precio += 80;
                break;
            case "C":
                precio += 60;
                break;
            case "D":
                precio += 50;
                break;
            case "E":
                precio += 30;
                break;
            case "F":
                precio += 10;
                break;
        }
        if (this.peso > 0 && this.peso < 19) { //En el enunciado no contempla los valores decimales entre los límites, pero yo sí incluyo todos los valores mayores que 0.
            precio += 10;
        }
        else if (this.peso > 19 && this.peso < 49) {
            precio += 50;
        }
        else if (this.peso > 49 && this.peso < 79) {
            precio += 80;
        }
        else if (this.peso > 79) {
            precio += 100;
        }
        return precio;
    }
}
