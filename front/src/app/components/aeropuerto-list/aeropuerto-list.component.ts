import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-aeropuerto-list',
  templateUrl: './aeropuerto-list.component.html',
  styleUrls: ['./aeropuerto-list.component.scss']
})
export class AeropuertoListComponent {

  @HostBinding('class') classes = 'row';

  aeropuertos: any = [];

  constructor(private vuelosService: VuelosService, protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    this.getAeropuertos();
  }

  getAeropuertos() {
    this.vuelosService.getAeropuertos().subscribe(
      res => {
        this.aeropuertos = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteAeropuerto(id: string) {
    console.log(id);
    this.vuelosService.deleteAeropuerto(id).subscribe(
      res => {
        console.log(res);
        this.getAeropuertos();
      },
      err => {console.error(err)}
    );
  }

}
