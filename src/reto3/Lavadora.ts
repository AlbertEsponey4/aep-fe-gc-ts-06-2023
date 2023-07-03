const defCarga: number = 5;

class Lavadora extends Electrodomestico{
    private carga: number;

    constructor(precio: number, color: string, consumo: string, peso: number, carga: number = defCarga){
        super(precio, color, consumo, peso)
        this.carga = carga;
    }

    get getCarga(): number{
        return this.carga
    }

    precioFinal(): number {
        let precio = super.precioFinal()
        if (this.carga > 30)
            precio += 50;

        return precio;
    }
}