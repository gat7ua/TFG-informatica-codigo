import { Component, HostBinding } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.scss']
})
export class ProveedorListComponent {
  
  @HostBinding('class') classes = 'row';

  proveedores: any = [];

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit() {
    this.getProveedores();
  }

  getProveedores() {
    this.proveedorService.getProveedores().subscribe(
      res => {
        this.proveedores = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteProveedor(id: string) {
    console.log(id);
    this.proveedorService.deleteProveedor(id).subscribe(
      res => {
        console.log(res);
        this.getProveedores();
      },
      err => {console.error(err)}
    );
  }
}
