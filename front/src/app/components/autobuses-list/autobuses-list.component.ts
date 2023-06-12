import { Component, HostBinding } from '@angular/core';
import { AutobusesService } from 'src/app/services/autobuses.service';

@Component({
  selector: 'app-autobuses-list',
  templateUrl: './autobuses-list.component.html',
  styleUrls: ['./autobuses-list.component.scss']
})
export class AutobusesListComponent {

  @HostBinding('class') classes = 'row';

  autobuses: any = [];
  autobVer: any = [];
  indices: any = [];

  numPagina: number = 10;
  indActual: number = 0;
  maxIndice: number = 0;

  constructor(protected autobusesService: AutobusesService) {}

  async ngOnInit() {
    const carga = document.getElementById("carga");
    const todo = document.getElementById("todo");
    if (carga !== null) {
      carga.hidden = false;
    }
    if (todo !== null) {
      todo.hidden = true;
    }
    await this.getAutobuses();
    if (carga !== null) {
      carga.hidden = true;
    }
    if (todo !== null) {
      todo.hidden = false;
    }
    this.generaPaginas();
  }

  async getAutobuses() {
    this.autobuses = await this.autobusesService.getAutobuses().toPromise();
    //console.log(this.autobuses)
  }

  deleteAutobus(id: string) {
    console.log(id);
    this.autobusesService.deleteAutobus(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  paginar(indice: number): void {
    this.autobVer = [];
    for (var i = indice; i < this.numPagina + indice && i < this.autobuses.length; i++) {
      this.autobVer.push(this.autobuses[i]);
    }
    this.indActual = indice;
  }

  generaPaginas(): void {
    this.indices = [];
    var elem = Math.ceil(this.autobuses.length/this.numPagina);
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
