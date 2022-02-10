import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getPrenda(id: any) {
    const url = `${this.url}/listarprend/${id}`;
    return this.http.get(url);
  }

  addPrendas(doc: any) {
    const url = `${this.url}/prendas`;
    return this.http.post(url, doc);
  }

  eliminarPrenda(_id: number) {
    //const url = `${this.url}/prenda/${_id}`;
    //return this.http.delete(this.url + '/pedido/' + _id , {responseType: 'text'});
    return this.http.delete(this.url + '/prenda/' + _id, {responseType: 'text'});
  }

}
