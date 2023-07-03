const defResolucion: number = 20;
const def4K: boolean = false;

class Television extends Electrodomestico{
    private resolucion: number;
    private _4K: boolean;

    constructor(precio: number, color: string, consumo: string, peso: number, resolucion: number = defResolucion, _4K: boolean = def4K){
        super(precio, color, consumo, peso);
        this.resolucion = resolucion;
        this._4K = _4K;
    }

    get getResolucion(): number{
        return this.resolucion;
    }

    get get4K(): boolean{
        return this._4K
    }

    precioFinal(): number {
        let precio = super.precioFinal();
        if(this._4K){
            precio += 50;
        }
        if(this.resolucion > 40){
            precio += (precio * 0.3);
        }

        return precio;
    }
}