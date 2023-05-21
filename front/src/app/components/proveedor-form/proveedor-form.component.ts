import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.scss']
})
export class ProveedorFormComponent {

  @HostBinding('class') classes = 'row';

  prove: Proveedor = {
    id_prov: '',
    nombre: '',
    sede: ''
  };

  editar: boolean = false;

  constructor(private proveedorService: ProveedorService, private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params['id']) {
      this.proveedorService.getProveedor(params['id']).subscribe(
        res => {
          this.prove = res;
          console.log(this.prove);
          this.editar = true;
        },
        err => {console.error(err)}
      );
    }
  }

  guardarProveedor() {
    console.log(this.prove);
    this.proveedorService.postProveedor(this.prove)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/proveedores']);
        },
        err => {console.error(err)}
      ); 
  }

  editarProveedor() {
    this.proveedorService.putProveedor(this.prove).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/proveedores']);
      },
      err => {console.error(err)}
    );
  }

}
