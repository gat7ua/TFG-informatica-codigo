import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { Proveedor } from 'src/app/models/Proveedor';
import { Vuelo } from 'src/app/models/Vuelo';
import { AuthService } from 'src/app/services/auth.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos-form',
  templateUrl: './vuelos-form.component.html',
  styleUrls: ['./vuelos-form.component.scss']
})
export class VuelosFormComponent {

  @HostBinding('class') classes = 'row';

  vuelo: Vuelo = {
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
    aero_salida: undefined,
    aero_llegad: undefined,
    id_prov: undefined,
    precio_unitario: undefined, 
    uds_disponibles: undefined,
    uds_ocup: undefined,
    aero_sal_nombre: "",
    cod_iata_sal: "",
    aero_lleg_nombre: "",
    cod_iata_lleg: "",
    nombre_prov: "",
    sede_prov: "",
    ida: ""
  };

  aerolleg: string = "";
  aerosal: string = "";
  prove: string = "";
  
  aeropuertos: any = [];
  proveedores: any = [];

  editar: boolean = false;

  constructor(protected vuelosService: VuelosService, private router: Router, private activateRoute: ActivatedRoute, 
              private proveedorService: ProveedorService, protected authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    this.vuelosService.getAeropuertos().subscribe(
      res => {this.aeropuertos = res;},
      err => {console.log(err);}
    );
    this.proveedorService.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => {console.log(err);}
    );
    if (params['id']) {
      this.vuelosService.getVuelo(params['id']).subscribe(
        res => {
          this.vuelo = res;
          console.log(this.vuelo);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarVuelo() {
    this.vuelo.aero_llegad = parseInt(this.aerolleg);
    this.vuelo.aero_salida = parseInt(this.aerosal);
    this.vuelo.id_prov = parseInt(this.prove);
    if (!!this.vuelo.porc_buss)
      this.vuelo.porc_buss = this.vuelo.porc_buss/100 + 1;
    if (!!this.vuelo.porc_prim)
      this.vuelo.porc_prim = this.vuelo.porc_prim/100 + 1;
    console.log(this.vuelo);
    this.vuelosService.postVuelo(this.vuelo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/vuelos/list']);
        },
        err => {console.error(err)}
      ); 
  }

  editarVuelo() {
    this.vuelo.aero_llegad = parseInt(this.aerolleg);
    this.vuelo.aero_salida = parseInt(this.aerosal);
    this.vuelo.id_prov = parseInt(this.prove);
    if (!!this.vuelo.porc_buss)
      this.vuelo.porc_buss = this.vuelo.porc_buss/100 + 1;
    if (!!this.vuelo.porc_prim)
      this.vuelo.porc_prim = this.vuelo.porc_prim/100 + 1;
    this.vuelosService.putVuelo(this.vuelo).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/vuelos/list']);
      },
      err => {console.error(err)}
    );
  }

  obtenAeropuerto(id_aero: string) {
    var aeropu: Aeropuerto = this.aeropuertos.find(function(a: Aeropuerto) {
      if (a.id_aero == id_aero)
        return true;
      return false;
    })
    if (!!aeropu) 
      return aeropu.nombre;
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
