import { Component, HostBinding } from '@angular/core';

import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.scss']
})
export class CiudadListComponent {

  @HostBinding('class') classes = 'row';

  ciudades: any = [];

  constructor(private ciudadService: CiudadService) {}

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades() {
    this.ciudadService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteCiudad(id: string) {
    console.log(id);
    this.ciudadService.deleteCiudad(id).subscribe(
      res => {
        console.log(res);
        this.getCiudades();
      },
      err => {console.error(err)}
    );
  }
}
