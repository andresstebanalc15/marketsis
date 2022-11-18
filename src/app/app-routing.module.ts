import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EnviosComponent } from './components/envios/envios.component';
import { MediosTransporteComponent } from './components/medios-transporte/medios-transporte.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: ClientesFormComponent },
  { path: 'clientes/form/:id', component: ClientesFormComponent },

  { path: 'envios', component: EnviosComponent },
  { path: 'medios-transporte', component: MediosTransporteComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'tipo-mercancia', component: TipoMercanciaComponent },
  { path: 'tarifas', component: TarifasComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
