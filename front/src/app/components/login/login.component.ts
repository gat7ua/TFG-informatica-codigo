import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

import * as shajs from 'sha.js'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private authService: AuthService, private router: Router) {}

  usuario: Usuario = {
    email: '',
    contras: '',
    password: ''
  };

  
async login() {
  if (this.usuario.contras !== undefined) {
    this.usuario.password = shajs('sha256').update(this.usuario.contras).digest('hex');
    this.usuario.contras = '';
    
    try {
      var resu = await this.authService.login(this.usuario);
      if (resu == "correcto") {
        this.router.navigate(['/']);
      } else {
        const alerta = document.getElementById("alertaFallo");
        if (!!alerta)
          alerta.hidden = false;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

}
