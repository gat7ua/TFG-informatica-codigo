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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CiudadFormComponent,
    CiudadListComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    VuelosBuscaComponent
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
