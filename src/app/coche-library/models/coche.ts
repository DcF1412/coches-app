import { Carroceria } from "../enums/carroceria";

export class Coche {
    
    id: number;
    images: [string] ;
    marca: string;
    modelo: string;
    anno: number;
    precio: number;
    km: number;
    cambio: string;
    carroceria: Carroceria;
    provincia: string;

    constructor(id: number, marca: string, modelo: string, anno: number, precio: number, 
                km: number, cambio: string, carroceria: Carroceria, provincia: string){
                    
            this.id = id;
            this.marca = marca;
            this.modelo = modelo;
            this.anno = anno;
            this.precio = precio;
            this.km = km;
            this.cambio = cambio;
            this.carroceria = carroceria;
            this.provincia = provincia;        
        }
  
}

    