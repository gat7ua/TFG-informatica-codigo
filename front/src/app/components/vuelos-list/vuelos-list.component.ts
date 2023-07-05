import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos-list',
  templateUrl: './vuelos-list.component.html',
  styleUrls: ['./vuelos-list.component.scss']
})
export class VuelosListComponent {

  @HostBinding('class') classes = 'row';

  vuelos: any = [];
  vuelosVer: any = [];
  indices: any = [];

  numPagina: number = 10;
  indActual: number = 0;
  maxIndice: number = 0;

  constructor(protected vuelosService: VuelosService, protected authService: AuthService, private router: Router) {}

  async ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    const carga = document.getElementById("carga");
    const todo = document.getElementById("todo");
    if (carga !== null) {
      carga.hidden = false;
    }
    if (todo !== null) {
      todo.hidden = true;
    }
    await this.getVuelos();
    if (carga !== null) {
      carga.hidden = true;
    }
    if (todo !== null) {
      todo.hidden = false;
    }
    this.generaPaginas();
  }

  async getVuelos() {
    this.vuelos = await this.vuelosService.getVuelos().toPromise();
    console.log(this.vuelos)
  }

  deleteVuelo(id: string) {
    console.log(id);
    this.vuelosService.deleteVuelo(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  paginar(indice: number): void {
    this.vuelosVer = [];
    for (var i = indice; i < this.numPagina + indice && i < this.vuelos.length; i++) {
      this.vuelosVer.push(this.vuelos[i]);
    }
    this.indActual = indice;
  }

  generaPaginas(): void {
    this.indices = [];
    var elem = Math.ceil(this.vuelos.length/this.numPagina);
    console.log(elem);
    for (var i: number = 1; i <= elem; i++) {
      this.indices.push({
        pagina: i,
        indice: (i-1) * this.numPagina
      });
      this.maxIndice = (i-1) * this.numPagina;
    }   
    this.paginar(0);
  }
}
