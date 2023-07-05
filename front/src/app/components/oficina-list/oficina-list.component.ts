import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-oficina-list',
  templateUrl: './oficina-list.component.html',
  styleUrls: ['./oficina-list.component.scss']
})
export class OficinaListComponent {

  @HostBinding('class') classes = 'row';

  ofis: any = [];

  constructor(private vehiculosService: VehiculosService, protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    this.getOfis();
  }

  getOfis() {
    this.vehiculosService.getoficinasrent().subscribe(
      res => {
        this.ofis = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteEstAutobus(id: string) {
    console.log(id);
    this.vehiculosService.deleteoficinarent(id).subscribe(
      res => {
        console.log(res);
        this.getOfis();
      },
      err => {console.error(err)}
    );
  }
}
