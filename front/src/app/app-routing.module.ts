import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CiudadListComponent } from './components/ciudad-list/ciudad-list.component';
import {CiudadFormComponent} from './components/ciudad-form/ciudad-form.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/ciudades',
    pathMatch: 'full'
  },
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
