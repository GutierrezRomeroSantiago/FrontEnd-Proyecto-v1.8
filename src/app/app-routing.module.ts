import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { Grafico1Component } from './components/grafico1/grafico1.component';
import { Grafico2Component } from './components/grafico2/grafico2.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { ListarPrendaComponent } from './components/listar-prenda/listar-prenda.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: ListarPedidoComponent},
  { path: 'crearped', component: CrearPedidoComponent},
  { path: 'user', component: CrearUsuarioComponent},
  {path: 'listarprend/:id', component: ListarPrendaComponent},
  { path: 'grafico1', component: Grafico1Component},
  { path: 'grafico2', component: Grafico2Component},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
