import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Expres } from 'src/app/models/expres';
import { Normal } from 'src/app/models/normal';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedidos: Array<Normal> = [];
  pedidos1: Array<Expres> = [];
  pedidosApi: any;
  pedx: any;

  constructor(private pedidoService:PedidoService) { }

  getPedBasic() {
    this.pedidoService.getPedBasic().subscribe(pedidos => {
      this.pedidosApi = pedidos;
      for (let pedi of this.pedidosApi) {
        if (pedi._tipoPedido == "Normal") {
          let p = new Normal(
            pedi._id,
            pedi._precioBase,
            pedi._diasAprox,
            pedi._compania,
            pedi._fechaEnvio,
            pedi._paisSalida,
            pedi._estado,
            pedi._incremento,
            pedi._impuesto
          )
          this.pedidos.push(p);
        } else {
          let x = new Expres(
            pedi._id,
            pedi._precioBase,
            pedi._diasAprox,
            pedi._compania,
            pedi._fechaEnvio,
            pedi._paisSalida,
            pedi._estado,
            pedi._material,
            pedi._volumen,
            pedi._proteccion
          )
          this.pedidos1.push(x)
        }
        }
    })
    console.log(this.pedidos)
  }

  addNormal(
    _id: string,
    _precioBase: string,
    _diasAprox: string,
    _compania: string,
    _fechaEnvio: string,
    _paisSalida: string,
    _estado: string,
    _incremento: string,
    _impuesto: string
  ) {
    /*let estado: boolean = false
    if (_estado == "true") {
      let estado = true;
    }*/
    const idC = parseInt(_id);
    const precioBaseC = parseInt(_precioBase);
    const diasAproxC = parseInt(_diasAprox);
    const fechaEnvioC = Date.parse(_fechaEnvio);
    const incrementoC = parseInt(_incremento);
    const impuestoC = parseInt(_impuesto);


   const doc: any = {
     _id: idC,
     _tipoPedido: "Normal",
     _precioBase: precioBaseC,
     _diasAprox: diasAproxC,
     _compania: _compania,
     _fechaEnvio: fechaEnvioC,
     _paisSalida: _paisSalida,
     _estado: _estado,
     _incremento: incrementoC,
     _impuesto: impuestoC,
   }

   this.pedidoService.addPedido(doc).subscribe( a => {
     this.pedx = doc;
     this.pedidos.push(this.pedx);
     window.location.reload();
   });
  }


  addExpres(
    _id: string,
    _precioBase: string,
    _diasAprox: string,
    _compania: string,
    _fechaEnvio: string,
    _paisSalida: string,
    _estado: string,
    _material: string,
    _volumen: string,
    _proteccion: string,

  ) {
    const idC = parseInt(_id);
    const precioBaseC = parseInt(_precioBase);
    const diasAproxC = parseInt(_diasAprox);
    const fechaEnvioC = Date.parse(_fechaEnvio);
    const volumenC = parseInt(_volumen);
    


   const doc1: any = {
     _id: idC,
     _tipoPedido: "Expres",
     _precioBase: precioBaseC,
     _diasAprox: diasAproxC,
     _compania: _compania,
     _fechaEnvio: fechaEnvioC,
     _paisSalida: _paisSalida,
     _estado: _estado,
     _material: _material,
     _volumen: volumenC,
     _proteccion: _proteccion,
   }

   this.pedidoService.addPedido(doc1).subscribe( a => {
     this.pedx = doc1;
     this.pedidos.push(this.pedx);
     window.location.reload();
   });
  }


  eliminarPedido(id: any) {
    this.pedidoService.eliminarPedido(id).subscribe(data => {
      window.location.reload();
    })
  }

  ngOnInit(): void {
    this.getPedBasic();
  }

}
