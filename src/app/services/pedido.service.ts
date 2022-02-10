import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) {}

  getPedBasic() {
    const url = `${this.url}/pedidop`;
    return this.http.get(url);
  }

  addPedido(doc: any) {
    const url = `${this.url}/pedido`;
    return this.http.post(url, doc);
  }

  eliminarPedido(_id: number) {
    //const url = `${this.url}/pedido/${_id}`;
    return this.http.delete(this.url + '/pedido/' + _id , {responseType: 'text'});
    //return this.http.delete(this.url + '/usout/' + _usuario, {responseType: 'text'});
  }

  enviarCorreo(doc: any) {
    const url = `${this.url}/enviar`;
    console.log("Esto es el servicio");
    console.log(doc);
    return this.http.post(url, doc);
  }

}
