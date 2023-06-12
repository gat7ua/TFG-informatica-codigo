import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AutobusesService } from 'src/app/services/autobuses.service';
import { DataService } from 'src/app/services/data.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  static primera: boolean = true;

  constructor (private authService: AuthService, private vuelosService: VuelosService, private router: Router, private dataService: DataService) {}

  formV = {
    desde: "",
    hacia: "",
    clase: "",
    ida: "",
    vuelta: "",
    num_viaj: 0
  };

  aeropuertos: any = [];

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

  buscarV() {
    this.dataService.setJsonElement(this.formV);
    this.router.navigate(['/vuelos']);
  }
}
