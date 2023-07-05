import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CiudadListComponent } from './components/ciudad-list/ciudad-list.component';
import {CiudadFormComponent} from './components/ciudad-form/ciudad-form.component'
import { LoginComponent } from './components/login/login.component';
import {RegistroComponent} from 'src/app/components/registro/registro.component';
import { VuelosBuscaComponent } from './components/vuelos-busca/vuelos-busca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AeropuertoListComponent } from './components/aeropuerto-list/aeropuerto-list.component';
import { AeropuertoFormComponent } from './components/aeropuerto-form/aeropuerto-form.component';
import { EstacAutobusFormComponent } from './components/estac-autobus-form/estac-autobus-form.component';
import { EstacAutobusListComponent } from './components/estac-autobus-list/estac-autobus-list.component';
import { EstacTrenListComponent } from './components/estac-tren-list/estac-tren-list.component';
import { EstacTrenFormComponent } from './components/estac-tren-form/estac-tren-form.component';
import { VuelosFormComponent } from './components/vuelos-form/vuelos-form.component';
import { VuelosListComponent } from './components/vuelos-list/vuelos-list.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { AutobusesBuscaComponent } from './components/autobuses-busca/autobuses-busca.component';
import { AutobusesFormComponent } from './components/autobuses-form/autobuses-form.component';
import { AutobusesListComponent } from './components/autobuses-list/autobuses-list.component';
import { TrenesBuscaComponent } from './components/trenes-busca/trenes-busca.component';
import { TrenesListComponent } from './components/trenes-list/trenes-list.component';
import { TrenesFormComponent } from './components/trenes-form/trenes-form.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { AlojamientosBuscaComponent } from './components/alojamientos-busca/alojamientos-busca.component';
import { AlojamientosListComponent } from './components/alojamientos-list/alojamientos-list.component';
import { AlojamientosFormComponent } from './components/alojamientos-form/alojamientos-form.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { BlogComponent } from './components/blog/blog.component';
import { VehiculosBuscaComponent } from './components/vehiculos-busca/vehiculos-busca.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { NologinComponent } from './components/nologin/nologin.component';
import { NoprivilegeComponent } from './components/noprivilege/noprivilege.component';
import { ErrorComponent } from './components/error/error.component';
import { OficinaListComponent } from './components/oficina-list/oficina-list.component';
import { OficinaFormComponent } from './components/oficina-form/oficina-form.component';

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
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'perfil/editar',
    component: PerfilEditarComponent
  },
  {
    path: 'cesta',
    component: CestaComponent
  },
  {
    path: 'paspago',
    component: PasarelaPagoComponent
  },

  //Vuelos
  {
    path: 'vuelos',
    component: VuelosBuscaComponent
  },
  {
    path: 'vuelos/list',
    component: VuelosListComponent
  },
  {
    path: 'vuelos/add',
    component: VuelosFormComponent
  },
  {
    path: 'vuelos/modify/:id',
    component: VuelosFormComponent
  },
  {
    path:'aeropuertos',
    component: AeropuertoListComponent
  },
  {
    path: 'aeropuertos/add',
    component: AeropuertoFormComponent
  },
  {
    path: 'aeropuertos/modify/:id',
    component: AeropuertoFormComponent
  },

  //Autobus
  {
    path: 'autobuses',
    component: AutobusesBuscaComponent
  },
  {
    path: 'autobuses/list',
    component: AutobusesListComponent
  },
  {
    path: 'autobuses/add',
    component: AutobusesFormComponent
  },
  {
    path: 'autobuses/modify/:id',
    component: AutobusesFormComponent
  },
  {
    path:'estautobuses',
    component: EstacAutobusListComponent
  },
  {
    path: 'estautobuses/add',
    component: EstacAutobusFormComponent
  },
  {
    path: 'estautobuses/modify/:id',
    component: EstacAutobusFormComponent
  },

  //Tren
  {
    path: 'trenes',
    component: TrenesBuscaComponent
  },
  {
    path: 'trenes/list',
    component: TrenesListComponent
  },
  {
    path: 'trenes/add',
    component: TrenesFormComponent
  },
  {
    path: 'trenes/modify/:id',
    component: TrenesFormComponent
  },
  {
    path:'esttrenes',
    component: EstacTrenListComponent
  },
  {
    path: 'esttrenes/add',
    component: EstacTrenFormComponent
  },
  {
    path: 'esttrenes/modify/:id',
    component: EstacTrenFormComponent
  },

  //Alojamientos
  {
    path: 'alojamientos',
    component: AlojamientosBuscaComponent
  },
  {
    path: 'alojamientos/list',
    component: AlojamientosListComponent
  },
  {
    path: 'alojamientos/add',
    component: AlojamientosFormComponent
  },
  {
    path: 'alojamientos/modify/:id',
    component: AlojamientosFormComponent
  },

  //Vehiculos
  {
    path: 'vehiculos',
    component: VehiculosBuscaComponent
  },
  {
    path: 'oficinasrent',
    component: OficinaListComponent
  },
  {
    path: 'oficinasrent/add',
    component: OficinaFormComponent
  },
  {
    path: 'oficinasrent/modify/:id',
    component: OficinaFormComponent
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
  },

  // Proveedores
  {
    path: 'proveedores',
    component: ProveedorListComponent
  },
  {
    path: 'proveedores/add',
    component: ProveedorFormComponent
  },
  {
    path: 'proveedores/modify/:id',
    component: ProveedorFormComponent
  },

  //Usuarios
  {
    path: 'usuarios',
    component: UsuariosListComponent
  },

  //Blog
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/post/add',
    component: BlogFormComponent
  },
  {
    path: 'blog/post/modify/:id',
    component: BlogFormComponent
  },

  //Estadísticas
  {
    path: 'estadisticas',
    component: EstadisticasComponent
  },


  //error
  {
    path: 'nologin',
    component: NologinComponent
  },
  {
    path: 'noprivilege',
    component: NoprivilegeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
