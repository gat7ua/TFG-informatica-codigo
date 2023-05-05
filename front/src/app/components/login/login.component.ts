import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

import * as shajs from 'sha.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = {
    email: '',
    contras: '',
    password: ''
  };

  login() {
    if (this.usuario.contras !== undefined) {
      this.usuario.password = shajs('sha256').update(this.usuario.contras).digest('hex');;
      this.usuario.contras = '';
      console.log(this.usuario);
    }
  }

}
