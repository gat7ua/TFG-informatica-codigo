import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AutobusesService } from 'src/app/services/autobuses.service';

@Component({
  selector: 'app-estac-autobus-list',
  templateUrl: './estac-autobus-list.component.html',
  styleUrls: ['./estac-autobus-list.component.scss']
})
export class EstacAutobusListComponent {

  @HostBinding('class') classes = 'row';

  estautobuses: any = [];

  constructor(private autobusesService: AutobusesService, protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    this.getEstAutobuses();
  }

  getEstAutobuses() {
    this.autobusesService.getEstsAutobus().subscribe(
      res => {
        this.estautobuses = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteEstAutobus(id: string) {
    console.log(id);
    this.autobusesService.deleteEstAutobus(id).subscribe(
      res => {
        console.log(res);
        this.getEstAutobuses();
      },
      err => {console.error(err)}
    );
  }
}
