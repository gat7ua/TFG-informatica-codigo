import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

import * as shajs from 'sha.js'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  error: string = "";

  usuario: Usuario = {
    id_usua: 0,
    nif: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
    contras: '',
    password: '',
    direccion: ''
  };

  passconf: string = '';
  
  constructor(private authService: AuthService, private router: Router, private activateRoute: ActivatedRoute) {}

  async registrar() {
    if (this.usuario.contras !== undefined && this.passconf !== undefined) {
      this.usuario.password = shajs('sha256').update(this.usuario.contras).digest('hex');
      this.usuario.password = shajs('sha256').update(this.passconf).digest('hex');
      this.usuario.contras = '';
      this.passconf = '';
      console.log(this.usuario);
    }
    var str: string = await this.authService.registro(this.usuario);
    if (str == "correcto")  
      this.router.navigate(['/']);
  }

}
