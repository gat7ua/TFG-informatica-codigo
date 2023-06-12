import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CiudadFormComponent } from './components/ciudad-form/ciudad-form.component';
import { CiudadListComponent } from './components/ciudad-list/ciudad-list.component';

import {CiudadService} from './services/ciudad.service';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { VuelosBuscaComponent } from './components/vuelos-busca/vuelos-busca.component';
import { AeropuertoListComponent } from './components/aeropuerto-list/aeropuerto-list.component';
import { AeropuertoFormComponent } from './components/aeropuerto-form/aeropuerto-form.component';
import { EstacAutobusFormComponent } from './components/estac-autobus-form/estac-autobus-form.component';
import { EstacAutobusListComponent } from './components/estac-autobus-list/estac-autobus-list.component';
import { EstacTrenFormComponent } from './components/estac-tren-form/estac-tren-form.component';
import { EstacTrenListComponent } from './components/estac-tren-list/estac-tren-list.component';
import { VuelosFormComponent } from './components/vuelos-form/vuelos-form.component';
import { VuelosListComponent } from './components/vuelos-list/vuelos-list.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { AutobusesBuscaComponent } from './components/autobuses-busca/autobuses-busca.component';
import { AutobusesFormComponent } from './components/autobuses-form/autobuses-form.component';
import { AutobusesListComponent } from './components/autobuses-list/autobuses-list.component';
import { TrenesBuscaComponent } from './components/trenes-busca/trenes-busca.component';
import { TrenesFormComponent } from './components/trenes-form/trenes-form.component';
import { TrenesListComponent } from './components/trenes-list/trenes-list.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';
import { CestaComponent } from './components/cesta/cesta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CiudadFormComponent,
    CiudadListComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    VuelosBuscaComponent,
    AeropuertoListComponent,
    AeropuertoFormComponent,
    EstacAutobusFormComponent,
    EstacAutobusListComponent,
    EstacTrenFormComponent,
    EstacTrenListComponent,
    VuelosFormComponent,
    VuelosListComponent,
    ProveedorListComponent,
    ProveedorFormComponent,
    AutobusesBuscaComponent,
    AutobusesFormComponent,
    AutobusesListComponent,
    TrenesBuscaComponent,
    TrenesFormComponent,
    TrenesListComponent,
    PerfilComponent,
    PerfilEditarComponent,
    CestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CiudadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
