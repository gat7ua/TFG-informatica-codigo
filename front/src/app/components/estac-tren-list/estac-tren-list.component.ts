import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TrenesService } from 'src/app/services/trenes.service';

@Component({
  selector: 'app-estac-tren-list',
  templateUrl: './estac-tren-list.component.html',
  styleUrls: ['./estac-tren-list.component.scss']
})
export class EstacTrenListComponent {

  @HostBinding('class') classes = 'row';

  esttren: any = [];

  constructor(private trenesService: TrenesService, protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
    this.getEstTren();
  }

  getEstTren() {
    this.trenesService.getEstsTren().subscribe(
      res => {
        this.esttren = res;
        //console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteEstTren(id: string) {
    console.log(id);
    this.trenesService.deleteEstTren(id).subscribe(
      res => {
        console.log(res);
        this.getEstTren();
      },
      err => {console.error(err)}
    );
  }
}
