import { Component, HostBinding } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-aeropuerto-list',
  templateUrl: './aeropuerto-list.component.html',
  styleUrls: ['./aeropuerto-list.component.scss']
})
export class AeropuertoListComponent {

  @HostBinding('class') classes = 'row';

  aeropuertos: any = [];

  constructor(private vuelosService: VuelosService) {}

  ngOnInit() {
    this.getAeropuertos();
  }

  getAeropuertos() {
    this.vuelosService.getAeropuertos().subscribe(
      res => {
        this.aeropuertos = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteAeropuerto(id: string) {
    console.log(id);
    this.vuelosService.deleteAeropuerto(id).subscribe(
      res => {
        console.log(res);
        this.getAeropuertos();
      },
      err => {console.error(err)}
    );
  }

  cuenta(id: string, tipo: string): number {
    return this.vuelosService.cuentaVuelos(id, tipo);
  }

}
