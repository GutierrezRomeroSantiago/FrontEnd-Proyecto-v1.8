import { Prenda } from './prenda';

export class Calzado extends Prenda {
    protected _suela: string;
    protected _unidadesEnmercado: number;
    protected _calidad: string;
    constructor(
        id: number, 
        precioXmayor: number, 
        precioPublico: number, 
        fechaCompra:Date, 
        material:string, 
        paisFabric:string,
        pedi:number,
        suela:string,
        unidadesEnmercado:number,
        calidad:string) {

            super(id, precioXmayor, precioPublico, fechaCompra, material, paisFabric, pedi)
        this._suela = suela;
        this._unidadesEnmercado = unidadesEnmercado;
        this._calidad = calidad;
    }

    //Metodos GET
    get suela(){
        return this._suela;
      }
    get unidadesEnmercado(){
       return this._unidadesEnmercado;
      }
    get calidad(){
        return this._calidad;
      }
    }