import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CiudadListComponent } from './components/ciudad-list/ciudad-list.component';
import {CiudadFormComponent} from './components/ciudad-form/ciudad-form.component'
import { LoginComponent } from './components/login/login.component';
import {RegistroComponent} from 'src/app/components/registro/registro.component';
import { VuelosBuscaComponent } from './components/vuelos-busca/vuelos-busca.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  //Inicio
  {
    path: '',
    component: InicioComponent
  },

  //Login y registro
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },

  //Vuelos
  {
    path: 'vuelos',
    component: VuelosBuscaComponent
  },

  // Ciudades
  {
    path: 'ciudades',
    component: CiudadListComponent
  },
  {
    path: 'ciudades/add',
    component: CiudadFormComponent
  },
  {
    path: 'ciudades/modify/:id',
    component: CiudadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
