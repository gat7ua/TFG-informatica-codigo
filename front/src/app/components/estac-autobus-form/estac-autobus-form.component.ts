import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstAutobus } from 'src/app/models/EstAutobus';
import { AutobusesService } from 'src/app/services/autobuses.service';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-estac-autobus-form',
  templateUrl: './estac-autobus-form.component.html',
  styleUrls: ['./estac-autobus-form.component.scss']
})
export class EstacAutobusFormComponent {
  
  @HostBinding('class') classes = 'row';

  estauto: EstAutobus = {
    id_esau: "",
    nombre: "",
    id_ciud: undefined
  };

  ciudad: string = "";
  
  ciudades: any = [];

  editar: boolean = false;

  constructor(private autobusesService: AutobusesService, private router: Router, private activateRoute: ActivatedRoute, private ciudaService: CiudadService) {}

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    this.ciudaService.getCiudades().subscribe(
      res => {this.ciudades = res;},
      err => {console.log(err);}
    );
    if (params['id']) {
      this.autobusesService.getEstAutobus(params['id']).subscribe(
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
    this.autobusesService.postEstAutobus(this.estauto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/estautobuses']);
        },
        err => {console.error(err)}
      ); 
  }

  editarEstAutobus() {
    this.estauto.id_ciud = parseInt(this.ciudad);
    this.autobusesService.putEstAutobus(this.estauto).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/estautobuses']);
      },
      err => {console.error(err)}
    );
  }
}
