type sexo = "M" | "H";
const defSexo: sexo= "H"


class Persona{
    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: sexo;
    private peso: number;
    private altura: number;

    constructor(nombre: string = "", edad: number = 0, DNI: string, sexo: sexo = defSexo, peso: number = 0, altura: number = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}