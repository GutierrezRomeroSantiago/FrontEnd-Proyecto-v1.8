import { Prenda } from './prenda';

export class Abrigo extends Prenda {
    private _manga: string;
    private _cremallera: boolean;
    private _cuello: string;
    constructor(
        id: number,
        precioXmayor: number, 
        precioPublico: number, 
        fechaCompra:Date, 
        material:string, 
        paisFabric:string,
        pedi:number,
        manga:string,
        cremallera:boolean, 
        cuello:string) {

            super(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi)
        this._manga = manga;
        this._cremallera = cremallera;
        this._cuello =cuello;    
    }
    //Metodos GET
    get manga(){
        return this._manga;
      }
    get cremallera(){
       return this._cremallera;
      }
    get cuello(){
        return this._cuello;
      }
    }