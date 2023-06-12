import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstTren } from 'src/app/models/EstTren';
import { Proveedor } from 'src/app/models/Proveedor';
import { Tren } from 'src/app/models/Tren';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { TrenesService } from 'src/app/services/trenes.service';

@Component({
  selector: 'app-trenes-form',
  templateUrl: './trenes-form.component.html',
  styleUrls: ['./trenes-form.component.scss']
})
export class TrenesFormComponent {

  @HostBinding('class') classes = 'row';

  tren: Tren = {
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

  constructor(protected trenService: TrenesService, private router: Router, private activateRoute: ActivatedRoute, private proveedorService: ProveedorService) {}

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    this.trenService.getEstsTren().subscribe(
      res => {this.estaciones = res;},
      err => {console.log(err);}
    );
    this.proveedorService.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => {console.log(err);}
    );
    if (params['id']) {
      this.trenService.getTren(params['id']).subscribe(
        res => {
          this.tren = res;
          console.log(this.tren);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarTren() {
    this.tren.esta_llegad = parseInt(this.estalleg);
    this.tren.esta_salida = parseInt(this.estasal);
    this.tren.id_prov = parseInt(this.prove);
    if (!!this.tren.porc_buss)
      this.tren.porc_buss = this.tren.porc_buss/100 + 1;
    if (!!this.tren.porc_prim)
      this.tren.porc_prim = this.tren.porc_prim/100 + 1;
    console.log(this.tren);
    this.trenService.postTren(this.tren)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/trenes/list']);
        },
        err => {console.error(err)}
      ); 
  }

  editarTren() {
    this.tren.esta_llegad = parseInt(this.estalleg);
    this.tren.esta_salida = parseInt(this.estasal);
    this.tren.id_prov = parseInt(this.prove);
    if (!!this.tren.porc_buss)
      this.tren.porc_buss = this.tren.porc_buss/100 + 1;
    if (!!this.tren.porc_prim)
      this.tren.porc_prim = this.tren.porc_prim/100 + 1;
    this.trenService.postTren(this.tren).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/trenes/list']);
      },
      err => {console.error(err)}
    );
  }

  obtenEstacion(id_estr: string) {
    var estacio: EstTren = this.estaciones.find(function(a: EstTren) {
      if (a.id_estr == id_estr)
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
