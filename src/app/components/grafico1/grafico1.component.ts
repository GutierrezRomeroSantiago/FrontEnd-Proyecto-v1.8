import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Expres } from 'src/app/models/expres';
import { Normal } from 'src/app/models/normal';
import { PrecioCl } from 'src/app/models/precios';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pedidos: Array<Normal> = [];
  pedidos1: Array<Expres> = [];
  pedidosApi: any;
  clasiPed: PrecioCl[] = [];


  chartOptions: any = {
    chart: { 
      backgroundColor: "",
      type: 'bar',
    },
    title: {
      text: 'Precio Base pedido',
    },
    yAxis: {
      tickInterval: 5,
      categories: [],
    },
    xAxis: {
      min: 0,
      title: {
        text: 'Id del pedido',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: '€',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'column',
        name: 'Precio',
        data: [],
        color: '#849BE5',
      },
    ],
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#303030',
      },
    },
  };

  constructor(private pedidoService: PedidoService) { }


  /*getPedis2(){
    this.pedidoService.getPedBasic().subscribe(pedidos => {
      this.pedidosApi = pedidos;
      for (let pedid of this.pedidosApi) {
        let p = new PrecioCl
      }
    })
  }*/


  getPedis(){
    this.pedidoService.getPedBasic().subscribe((pedidosApi: any) =>{

      
      this.clasiPed = pedidosApi.map((x:any) =>
      new PrecioCl(
        x._id,
        x._precioBase,
      )
      )
      console.log(this.clasiPed);

      pedidosApi.sort((a: any, b: any) =>
        a._precio > b._precio ? -1 : 1
      )

      this.clasiPed.sort((a: PrecioCl, b: PrecioCl) =>
      a.precio > b.precio ? -1 : 1
      )
      const dataSeries = this.clasiPed.map(
        (x: PrecioCl) => x.precio
      );
      const dataCategories = this.clasiPed.map(
        (x: PrecioCl) => x.idP
      );
      this.chartOptions.series[0]['data'] = dataSeries;
      this.chartOptions.xAxis['categories'] = dataCategories;
      Highcharts.chart('miGrafico01', this.chartOptions);
    })
  }

  
  ngOnInit(): void {
    this.getPedis()
  }

}
