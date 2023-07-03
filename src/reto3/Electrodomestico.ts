const defPrecioBase: number = 100;
const defColor: string = "blanco";
const defConsumo: string = "F";
const defPeso: number = 5;

class Electrodomestico{
    protected precioBase: number;
    protected color: string;
    protected consumo: string;
    protected peso: number;

    constructor(precioBase: number = defPrecioBase, color: string = defColor, consumo: string = defConsumo, peso: number = defPeso){
        this.precioBase = precioBase;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;
    }

    get getPrecioBase(): number{
        return this.precioBase;
    }

    get getColor(): string{
        return this.color;
    }

    get getConsumo(): string{
        return this.consumo;
    }

    get getPeso(): number{
        return this.peso;
    }

    comprobarConsumoEnergetico(letra: string): boolean{
        if(letra === "A" || letra === "B" || letra === "C" || letra === "D" || letra === "E" || letra === "F"){
            return true;
        } else{
            return false;
        }
    }

    comprobarColor(color: string): boolean{
        if(color === "blanco" || color === "negro" || color === "rojo" || color === "azul" || color === "gris"){
            return true;
        } else if(color === "BLANCO" || color === "NEGRO" || color === "ROJO" || color === "AZUL" || color === "GRIS"){
            return true;
        }else{
            return false;
        }
    }

    precioFinal(): number{
        let precio: number = this.precioBase;
        switch(this.consumo){
            case "A":
                precio+=100;
                break;

            case "B":
                precio+=80;
                break;

            case "C":
                precio+=60;
                break;

            case "D":
                precio+=50;
                break;

            case "E":
                precio+=30;
                break;

            case "F":
                precio+=10;
                break;
        }

        if (this.peso > 0 && this.peso < 19){               //En el enunciado no contempla los valores decimales entre los límites, pero yo sí incluyo todos los valores mayores que 0.
            precio+=10;
        } else if(this.peso > 19 && this.peso < 49){
            precio+=50;
        } else if(this.peso > 49 && this.peso < 79){
            precio+=80;
        } else if(this.peso > 79){
            precio+=100;
        }

        return precio;
    }
}