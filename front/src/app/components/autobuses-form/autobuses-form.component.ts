import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autobus } from 'src/app/models/Autobus';
import { EstAutobus } from 'src/app/models/EstAutobus';
import { Proveedor } from 'src/app/models/Proveedor';
import { AutobusesService } from 'src/app/services/autobuses.service';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-autobuses-form',
  templateUrl: './autobuses-form.component.html',
  styleUrls: ['./autobuses-form.component.scss']
})
export class AutobusesFormComponent {

  @HostBinding('class') classes = 'row';

  autobus: Autobus = {
    id_prod: undefined,
    fecha: "",
    duracion: "",
    num_asi_tur: undefined,
    num_asi_buss: undefined,
    num_asi_prim: undefined,
    porc_buss: undefined,
    porc_prim: undefined,
    ocup_asi_tur: undefined,
    ocup_asi_buss: undefined,
    ocup_asi_prim: undefined,
    esta_salida: undefined,
    esta_llegad: undefined,
    id_prov: undefined,
    precio_unitario: undefined, 
    uds_disponibles: undefined,
    uds_ocup: undefined,
    esta_sal_nombre: "",
    esta_lleg_nombre: "",
    nombre_prov: "",
    sede_prov: "",
    ida: ""
  };

  estalleg: string = "";
  estasal: string = "";
  prove: string = "";
  
  estaciones: any = [];
  proveedores: any = [];

  editar: boolean = false;

  constructor(protected autobusService: AutobusesService, private router: Router, private activateRoute: ActivatedRoute, private proveedorService: ProveedorService) {}

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    this.autobusService.getEstsAutobus().subscribe(
      res => {this.estaciones = res;},
      err => {console.log(err);}
    );
    this.proveedorService.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => {console.log(err);}
    );
    if (params['id']) {
      this.autobusService.getAutobus(params['id']).subscribe(
        res => {
          this.autobus = res;
          console.log(this.autobus);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarAutobus() {
    this.autobus.esta_llegad = parseInt(this.estalleg);
    this.autobus.esta_salida = parseInt(this.estasal);
    this.autobus.id_prov = parseInt(this.prove);
    if (!!this.autobus.porc_buss)
      this.autobus.porc_buss = this.autobus.porc_buss/100 + 1;
    if (!!this.autobus.porc_prim)
      this.autobus.porc_prim = this.autobus.porc_prim/100 + 1;
    console.log(this.autobus);
    this.autobusService.postAutobus(this.autobus)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/autobuses/list']);
        },
        err => {console.error(err)}
      ); 
  }

  editarAutobus() {
    this.autobus.esta_llegad = parseInt(this.estalleg);
    this.autobus.esta_salida = parseInt(this.estasal);
    this.autobus.id_prov = parseInt(this.prove);
    if (!!this.autobus.porc_buss)
      this.autobus.porc_buss = this.autobus.porc_buss/100 + 1;
    if (!!this.autobus.porc_prim)
      this.autobus.porc_prim = this.autobus.porc_prim/100 + 1;
    this.autobusService.putAutobus(this.autobus).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/autobuses/list']);
      },
      err => {console.error(err)}
    );
  }

  obtenEstacion(id_esau: string) {
    var estacio: EstAutobus = this.estaciones.find(function(a: EstAutobus) {
      if (a.id_esau == id_esau)
        return true;
      return false;
    })
    if (!!estacio) 
      return estacio.nombre;
    return "";
  }

  obtenProveedor(id_prov: string) {
    var prove: Proveedor = this.proveedores.find(function(a: Proveedor) {
      if (a.id_prov == id_prov)
        return true;
      return false;
    })
    if (!!prove) 
      return prove.nombre;
    return "";
  }
}
