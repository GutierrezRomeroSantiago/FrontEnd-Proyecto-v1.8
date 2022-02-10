import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Normal } from 'src/app/models/normal';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})
export class Grafico2Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pedidos: Array<Normal> = [];
  pedidosApi: any;

  chartOptions: any = {
    chart: {
      type: "bar",
      backgroundColor: ""
    },
    title: {
      text: "Número total de pedidos"
    },
    xAxis: {
      categories: ['Pedidos Totales']
    },
    yAxis: {
      min: 0,
      title: {
        text: "Número de Tarjetas"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: [
      {
        type: "bar",
        name: "Normal",
        data: [],
        color: "#849BE5"
      },
      {
        type: "bar",
        name: "Expres",
        data: [],
        color: "#9E0CA3"
      }
    ]
  };


  constructor(private pedidoService: PedidoService) {}

  getTipo() {
    let count1: any = 0
    let count2: any = 0
    this.pedidoService.getPedBasic().subscribe(pedidos => {
      this.pedidosApi=pedidos;
      for (let tipo of this.pedidosApi) {
        if (tipo._tipoPedido == "Normal") {
          count1 += 1
        } else {
          count2 += 1
        }
      }
      console.log(count1)
      console.log(count2)

      this.chartOptions.series[0].data = [count1];
      this.chartOptions.series[1].data = [count2];
      console.log(this.chartOptions.series[0])
      console.log(this.chartOptions.series[1])
      Highcharts.chart("miGrafico02", this.chartOptions);

    })
  }

  ngOnInit() {
    this.getTipo()
  }

}
