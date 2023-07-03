"use strict";
const defResolucion = 20;
const def4K = false;
class Television extends Electrodomestico {
    constructor(precio, color, consumo, peso, resolucion = defResolucion, _4K = def4K) {
        super(precio, color, consumo, peso);
        this.resolucion = resolucion;
        this._4K = _4K;
    }
    get getResolucion() {
        return this.resolucion;
    }
    get get4K() {
        return this._4K;
    }
    precioFinal() {
        let precio = super.precioFinal();
        if (this._4K) {
            precio += 50;
        }
        if (this.resolucion > 40) {
            precio += (precio * 0.3);
        }
        return precio;
    }
}
