import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html',
  styleUrls: ['./ciudad-list.component.scss']
})
export class CiudadListComponent {

  @HostBinding('class') classes = 'row';

  ciudades: any = [];

  constructor(private ciudadService: CiudadService, protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    this.getCiudades();
  }

  getCiudades() {
    this.ciudadService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteCiudad(id: string) {
    console.log(id);
    this.ciudadService.deleteCiudad(id).subscribe(
      res => {
        console.log(res);
        this.getCiudades();
      },
      err => {console.error(err)}
    );
  }
}
