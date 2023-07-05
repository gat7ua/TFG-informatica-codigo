import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

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
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { AlojamientosBuscaComponent } from './components/alojamientos-busca/alojamientos-busca.component';
import { AlojamientosFormComponent } from './components/alojamientos-form/alojamientos-form.component';
import { AlojamientosListComponent } from './components/alojamientos-list/alojamientos-list.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { VehiculosBuscaComponent } from './components/vehiculos-busca/vehiculos-busca.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { NologinComponent } from './components/nologin/nologin.component';
import { NoprivilegeComponent } from './components/noprivilege/noprivilege.component';
import { ErrorComponent } from './components/error/error.component';
import { OficinaFormComponent } from './components/oficina-form/oficina-form.component';
import { OficinaListComponent } from './components/oficina-list/oficina-list.component';

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
    CestaComponent,
    PasarelaPagoComponent,
    BlogComponent,
    UsuariosListComponent,
    AlojamientosBuscaComponent,
    AlojamientosFormComponent,
    AlojamientosListComponent,
    EstadisticasComponent,
    VehiculosBuscaComponent,
    BlogPostComponent,
    BlogFormComponent,
    NologinComponent,
    NoprivilegeComponent,
    ErrorComponent,
    OficinaFormComponent,
    OficinaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CiudadService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
