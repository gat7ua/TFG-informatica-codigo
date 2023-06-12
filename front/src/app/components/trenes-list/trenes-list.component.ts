import { Component, HostBinding } from '@angular/core';
import { TrenesService } from 'src/app/services/trenes.service';

@Component({
  selector: 'app-trenes-list',
  templateUrl: './trenes-list.component.html',
  styleUrls: ['./trenes-list.component.scss']
})
export class TrenesListComponent {

  @HostBinding('class') classes = 'row';

  trenes: any = [];
  trenVer: any = [];
  indices: any = [];

  numPagina: number = 10;
  indActual: number = 0;
  maxIndice: number = 0;

  constructor(protected trenesService: TrenesService) {}

  async ngOnInit() {
    const carga = document.getElementById("carga");
    const todo = document.getElementById("todo");
    if (carga !== null) {
      carga.hidden = false;
    }
    if (todo !== null) {
      todo.hidden = true;
    }
    await this.getTrenes();
    if (carga !== null) {
      carga.hidden = true;
    }
    if (todo !== null) {
      todo.hidden = false;
    }
    this.generaPaginas();
  }

  async getTrenes() {
    this.trenes = await this.trenesService.getTrenes().toPromise();
    //console.log(this.autobuses)
  }

  deleteTren(id: string) {
    console.log(id);
    this.trenesService.deleteTren(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  paginar(indice: number): void {
    this.trenVer = [];
    for (var i = indice; i < this.numPagina + indice && i < this.trenes.length; i++) {
      this.trenVer.push(this.trenes[i]);
    }
    this.indActual = indice;
  }

  generaPaginas(): void {
    this.indices = [];
    var elem = Math.ceil(this.trenes.length/this.numPagina);
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
