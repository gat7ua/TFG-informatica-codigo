import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-busca',
  templateUrl: './vehiculos-busca.component.html',
  styleUrls: ['./vehiculos-busca.component.scss']
})
export class VehiculosBuscaComponent {

  numPagina: number = 5;

  aeropuertos: any = [];

  form = {
    desde: "",
    hacia: "",
    clase: "",
    ida: "",
    vuelta: "",
    num_viaj: 0,
    num_viaj_e: 25
  };

  filtro: any = {
    pmax: "",
    hdesde: "",
    hhasta: "",
    orden: ""
  }

  orden: string = "";

  idas: any = [];
  vueltas: any = [];

  indicesIda: any = [];
  indicesVuelta: any = [];

  paginIdas: any = [];
  paginVueltas: any = [];

  indActualIda: number = 0;
  indActualVuelta: number = 0;

  maxIndIda: number = 0;
  maxIndVuelta: number = 0;

  constructor(protected vehiculoService: VehiculosService, private router: Router) {}

  ngOnInit() {
    
  }
}
