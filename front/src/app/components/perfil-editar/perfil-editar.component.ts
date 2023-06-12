import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.scss']
})
export class PerfilEditarComponent {
  constructor (private authService: AuthService, private router: Router) {}

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
    if (this.authService.getUser != null)
      this.usuario = this.authService.getUser();
  }

  async editarUsuario() {
    var resu = await this.authService.putUsuario(this.usuario);
    this.router.navigate(["/perfil"]);
  }
}
