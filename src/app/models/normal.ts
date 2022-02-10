import { Pedido } from './pedido';
import { Prenda } from './prenda';

export class Normal extends Pedido {
    protected _incremento: number;
    protected _impuesto: number;

    constructor(
        id: number, 
        precioBase: number,
        diasAprox: number, 
        compañia: string,
        fechaEnvio: Date, 
        paisSalida: string,
        estado: boolean, 
        incremento:number,
        impuesto:number) {

        super(id, precioBase, diasAprox, compañia, fechaEnvio, paisSalida, estado)

        this._incremento = incremento;
        this._impuesto = impuesto;
    }
    //Metodos GET
    get incremento() {
        return this._incremento;
    }
    get impuesto() {
        return this._impuesto;
    }

    override costoPedido(): number {
        let costo: number
        let imp: number
        let incre: number

        imp = this._impuesto
        incre = this._incremento
        costo = super.costoPedido()
        costo = costo + imp + incre
        return costo
    }
}