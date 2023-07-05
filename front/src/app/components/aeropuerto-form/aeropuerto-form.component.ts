import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { AuthService } from 'src/app/services/auth.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-aeropuerto-form',
  templateUrl: './aeropuerto-form.component.html',
  styleUrls: ['./aeropuerto-form.component.scss']
})
export class AeropuertoFormComponent {

  @HostBinding('class') classes = 'row';

  aeropu: Aeropuerto = {
    id_aero: "",
    nombre: "",
    id_ciud: undefined,
    cod_iata: ""
  };

  ciudad: string = "";
  
  ciudades: any = [];

  editar: boolean = false;

  constructor(private vuelosService: VuelosService, private router: Router, private activateRoute: ActivatedRoute, 
              private ciudaService: CiudadService, private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    this.ciudaService.getCiudades().subscribe(
      res => {this.ciudades = res;},
      err => {console.log(err);}
    );
    if (params['id']) {
      this.vuelosService.getAeropuerto(params['id']).subscribe(
        res => {
          this.aeropu = res;
          console.log(this.aeropu);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarAeropuerto() {
    this.aeropu.id_ciud = parseInt(this.ciudad);
    console.log(this.aeropu);
    this.vuelosService.postAeropuerto(this.aeropu)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/aeropuertos']);
        },
        err => {console.error(err)}
      ); 
  }

  editarAeropuerto() {
    this.aeropu.id_ciud = parseInt(this.ciudad);
    this.vuelosService.putAeropuerto(this.aeropu).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/aeropuertos']);
      },
      err => {console.error(err)}
    );
  }


}
