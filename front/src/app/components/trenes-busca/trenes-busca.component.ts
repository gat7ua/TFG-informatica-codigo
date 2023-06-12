import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tren } from 'src/app/models/Tren';
import { TrenesService } from 'src/app/services/trenes.service';

@Component({
  selector: 'app-trenes-busca',
  templateUrl: './trenes-busca.component.html',
  styleUrls: ['./trenes-busca.component.scss']
})
export class TrenesBuscaComponent {

  numPagina: number = 5;

  eststren: any = [];

  form = {
    desde: "",
    hacia: "",
    clase: "",
    ida: "",
    vuelta: "",
    num_viaj: 0
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

  constructor(protected trenesService: TrenesService, private router: Router) {}

  ngOnInit() {
    this.getEstsTren();
  }

  getEstsTren() {
    this.trenesService.getEstsTren().subscribe(
      res => {
        this.eststren = res;
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
    
    this.trenesService.buscaTrenes(this.form).subscribe(
      res => {
        console.log(res);
        var trenes: any = []; 
        trenes = res;
        for (let tren of trenes) {
          if (this.filtro.pmax != "") {
            var prex: number = parseFloat(this.filtro.pmax);
            if (prex < (tren.precio_unitario * (this.form.clase == "turista" ? 1 : (this.form.clase == "bussiness" ? tren.porc_buss : tren.porc_prim))))
              continue;
          }
          if (this.filtro.hdesde != "") {
            var fecVuelo: Date = new Date(tren.fecha);
            var hora: number = parseInt(this.filtro.hdesde.substring(0, 2));
            var mins: number = parseInt(this.filtro.hdesde.substring(3));
            if (fecVuelo.getHours() < hora)
              continue;
            else if (fecVuelo.getHours() == hora && fecVuelo.getMinutes() < mins)
              continue;
          }
          if (this.filtro.hhasta != "") {
            var fecVuelo: Date = new Date(tren.fecha);
            var hora: number = parseInt(this.filtro.hhasta.substring(0, 2));
            var mins: number = parseInt(this.filtro.hhasta.substring(3));
            if (fecVuelo.getHours() > hora)
              continue;
            else if (fecVuelo.getHours() == hora && fecVuelo.getMinutes() > mins)
              continue;
          }
          if (tren.ida === "ida")
            this.idas.push(tren);
          else 
            this.vueltas.push(tren);
        }
        if (this.filtro.orden != "") {
          if (this.filtro.orden == "1") { //Precio ascendente
            this.idas.sort( function(a: Tren, b: Tren) { //idas
              if (!a.precio_unitario) return -1;
              if (!b.precio_unitario) return 1;
              if (a.precio_unitario > b.precio_unitario) return -1;
              else if (a.precio_unitario < b.precio_unitario) return 1;
              return 0;
            });
            this.vueltas.sort( function(a: Tren, b: Tren) { //vueltas
              if (!b.precio_unitario) return 1;
              if (!a.precio_unitario) return -1;
              if (a.precio_unitario > b.precio_unitario) return -1;
              else if (a.precio_unitario < b.precio_unitario) return 1;
              return 0;
            });
          }
          else if (this.filtro.orden == "2") { //Precio descendente
            this.idas.sort( function(a: Tren, b: Tren) { //idas
              if (!b.precio_unitario) return 1;
              if (!a.precio_unitario) return -1;
              if (a.precio_unitario > b.precio_unitario) return -1;
              else if (a.precio_unitario < b.precio_unitario) return 1;
              return 0;
            });
            this.vueltas.sort( function(a: Tren, b: Tren) { //vueltas
              if (!a.precio_unitario) return -1;
              if (!b.precio_unitario) return 1;
              if (a.precio_unitario < b.precio_unitario) return -1;
              else if (a.precio_unitario > b.precio_unitario) return 1;
              return 0;
            });
          }
          else if (this.filtro.orden == "3") { //Hora ascendente
            this.idas.sort( function(a: Tren, b: Tren) { //idas
              if (!a.fecha) return -1;
              if (!b.fecha) return 1;
              var fecA: Date = new Date(a.fecha);
              var fecB: Date = new Date(b.fecha);
              if (fecA < fecB) return -1;
              else if (fecA > fecB) return 1;
              return 0;
            });
            this.vueltas.sort( function(a: Tren, b: Tren) { //vueltas
              if (!a.fecha) return -1;
              if (!b.fecha) return 1;
              var fecA: Date = new Date(a.fecha);
              var fecB: Date = new Date(b.fecha);
              if (fecA < fecB) return -1;
              else if (fecA > fecB) return 1;
              return 0;
            });
          }
          else if (this.filtro.orden == "4") { //Hora Descendente
            this.idas.sort( function(a: Tren, b: Tren) { //idas
              if (!b.fecha) return 1;
              if (!a.fecha) return -1;
              var fecA: Date = new Date(a.fecha);
              var fecB: Date = new Date(b.fecha);
              if (fecA > fecB) return -1;
              else if (fecA < fecB) return 1;
              return 0;
            });
            this.vueltas.sort( function(a: Tren, b: Tren) { //vueltas
              if (!b.fecha) return 1;
              if (!a.fecha) return -1;
              var fecA: Date = new Date(a.fecha);
              var fecB: Date = new Date(b.fecha);
              if (fecA > fecB) return -1;
              else if (fecA < fecB) return 1;
              return 0;
            });
          }
        }
        console.log(this.idas);
        console.log(this.vueltas);
        this.generaPaginas();
      },
      err => console.log(err)
    )
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

  anayadeCesta(prod: any) {
    prod.categoria = this.form.clase;
    prod.unidades = this.form.num_viaj;
    prod.importe = this.form.num_viaj * prod.precio_unitario *
                   (this.form.clase == "turista" ? 
                    1 : (this.form.clase == "bussiness" ? 
                      prod.porc_buss : prod.porc_prim))
    this.trenesService.anyadeProdCesta(prod).subscribe(
      res => {
        this.router.navigate(['/cesta']);
      },
      err => { console.log(err); }
    );
  }
}
