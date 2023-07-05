import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-alojamientos-busca',
  templateUrl: './alojamientos-busca.component.html',
  styleUrls: ['./alojamientos-busca.component.scss']
})
export class AlojamientosBuscaComponent {
  numPagina: number = 8;

  ciudades: any = [];
  alojamien: any = [];

  form = {
    id_ciud: "",
    cod_aloj: "",
    num_perso: 0,
    uds: 0,
    chIn: "",
    chOut: ""
  };

  filtro: any = {
    pmax: "",
    orden: ""
  }

  orden: string = "";
  indices: any = [];
  pagin: any = [];
  indActual: number = 0;
  maxInd: number = 0;

  constructor(protected alojamientosService: AlojamientosService, private router: Router, private ciudadService: CiudadService) {}

  ngOnInit() {
    this.getAlojamientos();
  }

  getAlojamientos() {
    this.ciudadService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
      },
      err => console.error(err)
    );
  }

  buscar() {
    console.log(this.form);
    this.alojamien = [];
    const busquedaElI = document.getElementById("resAloja");
    if (busquedaElI !== null) {
      busquedaElI.hidden = false;
    }
    
    this.alojamientosService.buscaalojamientos(this.form).subscribe(
      res => {
        console.log(res);
        var vuelos: any = []; 
        vuelos = res;
        for (let vuelo of vuelos) {
          if (this.filtro.pmax != "") {
            var prex: number = parseFloat(this.filtro.pmax);
            if (prex < (vuelo.precio_unitario))
              continue;
          }
          this.alojamien.push(vuelo);
        }
        if (this.filtro.orden != "") {
          if (this.filtro.orden == "1") { //Precio ascendente
            this.alojamien.sort( function(a: any, b: any) { //idas
              if (!a.precio_unitario) return -1;
              if (!b.precio_unitario) return 1;
              if (a.precio_unitario > b.precio_unitario) return -1;
              else if (a.precio_unitario < b.precio_unitario) return 1;
              return 0;
            });
          }
          else if (this.filtro.orden == "2") { //Precio descendente
            this.alojamien.sort( function(a: any, b: any) { //idas
              if (!b.precio_unitario) return 1;
              if (!a.precio_unitario) return -1;
              if (a.precio_unitario > b.precio_unitario) return -1;
              else if (a.precio_unitario < b.precio_unitario) return 1;
              return 0;
            });
          }
        }
        console.log(this.alojamien);
        this.generaPaginas();
      },
      err => console.log(err)
    )
  }

  paginar(indice: number): void {
    this.pagin = [];
    for (var i = indice; i < this.numPagina + indice && i < this.alojamien.length; i++) {
      this.pagin.push(this.alojamien[i]);
    }
    this.indActual = indice;
  }

  generaPaginas(): void {
    this.indices = [];
    var elem = Math.ceil(this.alojamien.length/this.numPagina);
    for (var i: number = 1; i <= elem; i++) {
      this.indices.push({
        pagina: i,
        indice: (i-1) * this.numPagina
      });
      this.maxInd = (i-1) * this.numPagina;
    }
    this.paginar(0);
  }
  
  anayadeCesta(prod: any) {
    prod.unidades = this.form.uds;
    prod.chIn = this.form.chIn;
    prod.chOut = this.form.chOut;
    prod.importe = prod.precio_unitario;
    this.alojamientosService.anyadeProdCesta(prod).subscribe(
      res => {
        this.router.navigate(['/cesta']);
      },
      err => { console.log(err); }
    );
  }
}
