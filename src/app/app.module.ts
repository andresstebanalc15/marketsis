import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnviosComponent } from './components/envios/envios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { MediosTransporteComponent } from './components/medios-transporte/medios-transporte.component';
import { TipoMercanciaComponent } from './components/tipo-mercancia/tipo-mercancia.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnviosComponent,
    ClientesComponent,
    TarifasComponent,
    LugaresComponent,
    MediosTransporteComponent,
    TipoMercanciaComponent,
    AdministradorComponent,
    ClientesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
