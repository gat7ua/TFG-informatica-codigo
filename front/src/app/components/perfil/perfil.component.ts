import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor (private authService: AuthService, private router: Router) { }

  usuario: Usuario = {
    id_usua: 0,
    nif: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
    contras: '',
    password: '',
    direccion: '',
    token: ''
  }

  ngOnInit() {
    if (this.authService.getUser() == null)
      this.router.navigate(['/'])
    this.usuario = this.authService.getUser();
  }
}
