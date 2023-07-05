import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alojamientos-form',
  templateUrl: './alojamientos-form.component.html',
  styleUrls: ['./alojamientos-form.component.scss']
})
export class AlojamientosFormComponent {

  constructor(protected authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin" || this.authService.getRolUsuario()==="agente"))
      this.router.navigate(['/noprivilege']);
  }

}
