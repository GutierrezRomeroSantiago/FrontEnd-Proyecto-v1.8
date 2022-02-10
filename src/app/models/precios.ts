export class PrecioCl {
    private _idPed: number;
    private _precio: number;

  
    constructor(
        _idPed: number,
        _precio: number,

    ) {
      this._idPed = _idPed;
      this._precio = _precio;

    }
  
    get idP() {
      return this._idPed;
    }
  
    get precio() {
      return this._precio;
    }
  }