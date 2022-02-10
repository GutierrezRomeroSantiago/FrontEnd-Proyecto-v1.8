import { Prenda } from './prenda';

export class Joya extends Prenda {
    protected _quilates: number;
    protected _peso: number;
    constructor(
        id: number, 
        precioXmayor: number, 
        precioPublico: number, 
        fechaCompra:Date, 
        material:string, 
        paisFabric:string,
        pedi: number,
        quilates:number,
        peso:number,
        ) {

            super(id, precioXmayor, precioPublico, fechaCompra,material, paisFabric, pedi)
        this._quilates = quilates;
        this._peso = peso    
    }
    //Metodos GET
    get quilates(){
        return this._quilates;
      }
    get peso(){
       return this._peso;
      }
    }