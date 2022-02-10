import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ListarPrendaComponent } from './components/listar-prenda/listar-prenda.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Grafico1Component } from './components/grafico1/grafico1.component';
import { HighchartsChartModule } from "highcharts-angular";
import { Grafico2Component } from './components/grafico2/grafico2.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPedidoComponent,
    CrearPedidoComponent,
    ListarPrendaComponent,
    LoginComponent,
    CrearUsuarioComponent,
    Grafico1Component,
    Grafico2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
