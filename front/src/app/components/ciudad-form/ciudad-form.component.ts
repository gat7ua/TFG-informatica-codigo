import { Component, HostBinding } from '@angular/core';
import { Ciudad } from 'src/app/models/Ciudad';
import { ActivatedRoute, Router } from '@angular/router';

import {CiudadService} from '../../services/ciudad.service'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ciudad-form',
  templateUrl: './ciudad-form.component.html',
  styleUrls: ['./ciudad-form.component.scss']
})
export class CiudadFormComponent {

  @HostBinding('class') classes = 'row';

  ciudad: Ciudad = {
    id_ciud: 0,
    nombre: '',
    pais:''
  };

  editar: boolean = false;

  constructor(private ciudadService: CiudadService, private router: Router, private activateRoute: ActivatedRoute, protected authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params['id']) {
      this.ciudadService.getCiudad(params['id']).subscribe(
        res => {
          this.ciudad = res;
          console.log(this.ciudad);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarCiudad() {
    console.log(this.ciudad);
    this.ciudadService.postCiudad(this.ciudad)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/ciudades']);
        },
        err => {console.error(err)}
      ); 
  }

  editarCiudad() {
    this.ciudadService.putCiudad(this.ciudad).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/ciudades']);
      },
      err => {console.error(err)}
    );
  }

}
