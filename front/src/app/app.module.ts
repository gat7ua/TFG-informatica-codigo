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
    ProveedorFormComponent
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
