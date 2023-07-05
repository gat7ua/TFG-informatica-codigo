import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstTren } from 'src/app/models/EstTren';
import { AuthService } from 'src/app/services/auth.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { TrenesService } from 'src/app/services/trenes.service';

@Component({
  selector: 'app-estac-tren-form',
  templateUrl: './estac-tren-form.component.html',
  styleUrls: ['./estac-tren-form.component.scss']
})
export class EstacTrenFormComponent {

  @HostBinding('class') classes = 'row';

  estauto: EstTren = {
    id_estr: "",
    nombre: "",
    id_ciud: undefined
  };

  ciudad: string = "";
  
  ciudades: any = [];

  editar: boolean = false;

  constructor(private trenesService: TrenesService, private router: Router, private activateRoute: ActivatedRoute, 
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
      this.trenesService.getEstTren(params['id']).subscribe(
        res => {
          this.estauto = res;
          console.log(this.estauto);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarEstTren() {
    this.estauto.id_ciud = parseInt(this.ciudad);
    console.log(this.estauto);
    this.trenesService.postEstTren(this.estauto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/esttrenes']);
        },
        err => {console.error(err)}
      ); 
  }

  editarEstTren() {
    this.estauto.id_ciud = parseInt(this.ciudad);
    this.trenesService.putEstTren(this.estauto).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/esttrenes']);
      },
      err => {console.error(err)}
    );
  }
}
