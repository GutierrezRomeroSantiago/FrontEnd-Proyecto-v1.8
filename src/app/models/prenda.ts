export class Prenda {
    protected _id: number;
    protected _precioXmayor: number;
    protected _precioPublico: number;
    private _fechaCompra: Date;
    protected _material: string;
    private _paisFabric: string;
    private _pedi: number;

    constructor(
        id: number,
        precioXmayor: number, 
        precioPublico: number, 
        fechaCompra:Date, 
        material:string, 
        paisFabric:string,
        pedi:number) {
        
        this._id = id;
        this._precioXmayor = precioXmayor;
        this._precioPublico = precioPublico;
        this._fechaCompra = fechaCompra;
        this._material = material;
        this._paisFabric = paisFabric;
        this._pedi = pedi;
    }
    
    // Metodos GET
get id() { 
    return this._id;
}
get precioXmayor() {
    return this._precioXmayor;
}
get precioPublico() {
    return this._precioPublico;
}
get fechaCompra() {
    return this._fechaCompra;
}
get material() {
    return this._material
}
get paisFabric() {
    return this._paisFabric;
}
get pedi() {
    return this._pedi;
}
}