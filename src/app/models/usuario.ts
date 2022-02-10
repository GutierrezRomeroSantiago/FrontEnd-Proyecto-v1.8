export class User {
    protected _id: any;
    protected _usuario: string;
    protected _password: string;

    constructor(
        id: any,
        usuario: string, 
        password: string, ) {
        
        this._id = id;
        this._usuario = usuario;
        this._password = password;
    }
    
get id() { 
    return this._id;
}
get usuario() {
    return this._usuario;
}
get password() {
    return this._password;
}
}