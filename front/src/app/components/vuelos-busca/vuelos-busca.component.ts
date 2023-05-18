import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos-busca',
  templateUrl: './vuelos-busca.component.html',
  styleUrls: ['./vuelos-busca.component.scss']
})
export class VuelosBuscaComponent {

  numPagina: number = 5;

  aeropuertos: any = [];

  form = {
    desde: "",
    hacia: "",
    clase: "",
    ida: "",
    vuelta: "",
    num_viaj: 0
  };

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

  constructor(private vuelosService: VuelosService) {}

  ngOnInit() {
    this.getAeropuertos();
  }

  getAeropuertos() {
    this.vuelosService.getAeropuertos().subscribe(
      res => {
        this.aeropuertos = res;
      },
      err => console.error(err)
    );
  }

  buscar() {
    console.log(this.form);
    this.idas = [];
    this.vueltas = [];
    const busquedaElI = document.getElementById("resIdas");
    if (busquedaElI !== null) {
      busquedaElI.hidden = false;
    }
    const busquedaElV = document.getElementById("resVueltas");
    if (busquedaElV !== null && !!this.form.vuelta) {
      busquedaElV.hidden = false;
    }
    
    this.vuelosService.buscaVuelos(this.form).subscribe(
      res => {
        console.log(res);
        var vuelos: any = []; 
        vuelos = res;
        for (let vuelo of vuelos)
          if (vuelo.ida === "ida")
            this.idas.push(vuelo);
          else 
            this.vueltas.push(vuelo);
        console.log(this.idas);
        console.log(this.vueltas);
        this.generaPaginas();
      },
      err => console.log(err)
    )
  }

  imprimirFecha(fecha: any): string {
    var pFec: Date = new Date(fecha);

    return pFec.getDay().toString().concat("/")
          .concat(pFec.getMonth().toString()).concat("/")
          .concat(pFec.getFullYear().toString()).concat(" a las ")
          .concat(pFec.getHours().toString()).concat(":")
          .concat(pFec.getMinutes().toString())
        ;
  }

  paginar(indice: number, idaVuelta: string): void {
    if (idaVuelta === "ida") {
      this.paginIdas = [];
      for (var i = indice; i < this.numPagina + indice && i < this.idas.length; i++) {
        this.paginIdas.push(this.idas[i]);
      }
      this.indActualIda = indice;
    } else if (idaVuelta === "vuelta") {
      this.paginVueltas = [];
      for (var i = indice; i < this.numPagina + indice && i < this.vueltas.length; i++) {
        this.paginVueltas.push(this.vueltas[i]);
      }
      this.indActualVuelta = indice;
    }
  }

  generaPaginas(): void {
    this.indicesIda = [];
    this.indicesVuelta = [];
    var elem = Math.ceil(this.idas.length/this.numPagina);
    for (var i: number = 1; i <= elem; i++) {
      this.indicesIda.push({
        pagina: i,
        indice: (i-1) * this.numPagina
      });
      this.maxIndIda = (i-1) * this.numPagina;
    }    
    elem = Math.ceil(this.vueltas.length/this.numPagina);
    for (var i: number = 1; i <= elem; i++) {
      this.indicesVuelta.push({
        pagina: i,
        indice: (i-1) * this.numPagina
      });
      this.maxIndVuelta = (i-1) * this.numPagina;
    }    
    this.paginar(0, "ida");
    this.paginar(0, "vuelta");
  }
}
