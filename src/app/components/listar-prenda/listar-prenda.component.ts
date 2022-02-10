import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abrigo } from 'src/app/models/abrigo';
import { Calzado } from 'src/app/models/calzado';
import { Joya } from 'src/app/models/joya';
import { PedidoService } from 'src/app/services/pedido.service';
import { PrendaService } from 'src/app/services/prenda.service';

@Component({
  selector: 'app-listar-prenda',
  templateUrl: './listar-prenda.component.html',
  styleUrls: ['./listar-prenda.component.css']
})
export class ListarPrendaComponent implements OnInit {
  prendas: Array<Abrigo> = [];
  prendas1: Array<Joya> = [];
  prendas2: Array<Calzado> = [];
  prendaApi: any;
  prendx: any;
  
  constructor(
    private route: ActivatedRoute,
    private prendaservice:PrendaService ,
    private router: Router
  ) {}

  getPrenda(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.prendaservice.getPrenda(id).subscribe( prendas => {
      this.prendaApi = prendas;
      for (let prend of this.prendaApi) {
        if (prend._tipoPrenda == "Abrigo") {
        let p = new Abrigo(
          prend._id,
          prend._precioXmayor,
          prend._precioPublico,
          prend._fechaCompra,
          prend._material,
          prend._paisFabric,
          prend._pedi,
          prend._manga,
          prend._cremallera,
          prend._cuello
        )
        this.prendas.push(p);
        }
        if (prend._tipoPrenda == "Joya") {
          let f = new Joya(
            prend._id,
            prend._precioXmayor,
            prend._precioPublico,
            prend._fechaCompra,
            prend._material,
            prend._paisFabric,
            prend._pedi,
            prend._quilates,
            prend._peso,
          )
        this.prendas1.push(f)
        } 
        if (prend._tipoPrenda == "Calzado") {
          let x = new Calzado(
            prend._id,
            prend._precioXmayor,
            prend._precioPublico,
            prend._fechaCompra,
            prend._material,
            prend._paisFabric,
            prend._pedi,
            prend._suela,
            prend._unidadesEnmercado,
            prend._calidad,
          )
        this.prendas2.push(x)
        }
      }
    })
    console.log(this.prendas);
    console.log(this.prendas1);
    console.log(this.prendas2);
  }

  addAbrigo(
    _id: string,
    _precioXmayor: string,
    _precioPublico: string,
    _fechaCompra: string,
    _material: string,
    _paisFabric: string,
    _manga: string,
    _cremallera: string,
    _cuello: string
  ) {
    
    let pedi = this.route.snapshot.paramMap.get("id");
    const idA = parseInt(_id);
    const precioMayor = parseInt(_precioXmayor);
    const precioPub = parseInt(_precioPublico);
    const fechaComp = Date.parse(_fechaCompra);

   const doc: any = {
    _id: idA,
    _tipoPrenda: "Abrigo",
    _precioXmayor: precioMayor,
    _precioPublico: precioPub,
    _fechaCompra: fechaComp,
    _material: _material,
    _paisFabric: _paisFabric,
    _pedi: pedi,
    _manga: _manga,
    _cremallera: _cremallera,
    _cuello: _cuello
   }

   this.prendaservice.addPrendas(doc).subscribe( a => {
     this.prendx = doc;
     this.prendas.push(this.prendx);
     window.location.reload();
    
   });
  }

  addJoya(
    _id: string,
    _precioXmayor: string,
    _precioPublico: string,
    _fechaCompra: string,
    _material: string,
    _paisFabric: string,
    _quilates: string,
    _peso: string,
  ) {
    
    let pedi = this.route.snapshot.paramMap.get("id");
    const idJ = parseInt(_id);
    const precioMayorJ = parseInt(_precioXmayor);
    const precioPubJ = parseInt(_precioPublico);
    const fechaCompJ = Date.parse(_fechaCompra);
    const quilJ = parseInt(_quilates);
    const pesoJ = parseInt(_peso);

   const doc: any = {
    _id: idJ,
    _tipoPrenda: "Joya",
    _precioXmayor: precioMayorJ,
    _precioPublico: precioPubJ,
    _fechaCompra: fechaCompJ,
    _material: _material,
    _paisFabric: _paisFabric,
    _pedi: pedi,
    _quilates: quilJ,
    _peso: pesoJ,
   }

   this.prendaservice.addPrendas(doc).subscribe( a => {
     this.prendx = doc;
     this.prendas1.push(this.prendx);
     window.location.reload();
   });
  }

  addCalzado(
    _id: string,
    _precioXmayor: string,
    _precioPublico: string,
    _fechaCompra: string,
    _material: string,
    _paisFabric: string,
    _suela: string,
    _unidadesEnmercado: string,
    _calidad: string
  ) {
    
    let pedi = this.route.snapshot.paramMap.get("id");
    const idC = parseInt(_id);
    const precioMayorJ = parseInt(_precioXmayor);
    const precioPubJ = parseInt(_precioPublico);
    const fechaCompJ = Date.parse(_fechaCompra);
    const unidC = parseInt(_unidadesEnmercado);


   const doc: any = {
    _id: idC,
    _tipoPrenda: "Calzado",
    _precioXmayor: precioMayorJ,
    _precioPublico: precioPubJ,
    _fechaCompra: fechaCompJ,
    _material: _material,
    _paisFabric: _paisFabric,
    _pedi: pedi,
    _suela: _suela,
    _unidadesEnmercado: unidC,
    _calidad: _calidad
   }

   this.prendaservice.addPrendas(doc).subscribe( a => {
     this.prendx = doc;
     this.prendas2.push(this.prendx);
     window.location.reload();
   });
  }

  eliminarPrenda(id: any) {
    this.prendaservice.eliminarPrenda(id).subscribe(data => {
      this.getPrenda();
    })
  }

  ngOnInit(): void {
    this.getPrenda();
  }

}
