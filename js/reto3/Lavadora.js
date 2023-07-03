"use strict";
const defCarga = 5;
class Lavadora extends Electrodomestico {
    constructor(precio, color, consumo, peso, carga = defCarga) {
        super(precio, color, consumo, peso);
        this.carga = carga;
    }
    get getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precio = super.precioFinal();
        if (this.carga > 30)
            precio += 50;
        return precio;
    }
}
