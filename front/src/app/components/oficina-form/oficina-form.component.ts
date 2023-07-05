import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstAutobus } from 'src/app/models/EstAutobus';
import { AuthService } from 'src/app/services/auth.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-oficina-form',
  templateUrl: './oficina-form.component.html',
  styleUrls: ['./oficina-form.component.scss']
})
export class OficinaFormComponent {

  @HostBinding('class') classes = 'row';

  estauto: EstAutobus = {
    id_esau: "",
    nombre: "",
    id_ciud: undefined
  };

  ciudad: string = "";
  
  ciudades: any = [];

  editar: boolean = false;

  constructor(private autobusesService: VehiculosService, private router: Router, private activateRoute: ActivatedRoute, 
              private ciudaService: CiudadService, protected authService: AuthService) {}

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
      this.autobusesService.getoficinarent(params['id']).subscribe(
        res => {
          this.estauto = res;
          console.log(this.estauto);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarEstAutobus() {
    this.estauto.id_ciud = parseInt(this.ciudad);
    console.log(this.estauto);
    this.autobusesService.postoficinarent(this.estauto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/oficinasrent']);
        },
        err => {console.error(err)}
      ); 
  }

  editarEstAutobus() {
    this.estauto.id_ciud = parseInt(this.ciudad);
    this.autobusesService.putoficinarent(this.estauto).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/oficinasrent']);
      },
      err => {console.error(err)}
    );
  }
}
