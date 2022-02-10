import { Pedido } from './pedido';
import { Prenda } from './prenda';

export class Expres extends Pedido {
    protected _material: string;
    protected _volumen: number;
    protected _proteccion: boolean;

    constructor(
        id: number, 
        precioBase: number,
        diasAprox: number, 
        compania: string,
        fechaEnvio: Date, 
        paisSalida: string,
        estado: boolean,
        material:string,
        volumen: number,
        proteccion: boolean,
        ) {

        super(id, precioBase, diasAprox, compania, fechaEnvio, paisSalida, estado)

        this._material = material;
        this._volumen = volumen;
        this._proteccion = proteccion;
    }
    //Metodos GET
    get material() {
        return this._material;
    }
    get volumen() {
        return this._volumen;
    }
    get proteccion() {
        return this._proteccion;
    }

    override costoPedido(): number {
        let costo: number
        let mat: string
        let vol: number
        let protec: boolean

        mat = this._material
        vol = this._volumen
        protec = this._proteccion
        costo = super.costoPedido()
        
        if (protec == true){
            costo = costo + 5
        }
        if (vol > 15) {
            costo = costo +5
        }
        if (mat == "Carton" ) {
            costo = costo +5
        }
        return costo
    }

}