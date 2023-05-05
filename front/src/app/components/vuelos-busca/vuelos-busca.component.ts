import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos-busca',
  templateUrl: './vuelos-busca.component.html',
  styleUrls: ['./vuelos-busca.component.scss']
})
export class VuelosBuscaComponent {

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
    const busquedaEl = document.getElementById("resIdas");
    if (busquedaEl !== null) { //CAMBIARR
      busquedaEl.hidden = false;
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
}
