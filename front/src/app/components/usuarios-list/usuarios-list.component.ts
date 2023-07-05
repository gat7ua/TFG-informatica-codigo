import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent {

  @HostBinding('class') classes = 'row';

  usuarios: any = [];
  usuariosVer: any = [];
  indices: any = [];

  numPagina: number = 15;
  indActual: number = 0;
  maxIndice: number = 0;

  constructor(protected usuarioService: UsuariosService, protected authService: AuthService, private router: Router) {}

  async ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    if (!(this.authService.getRolUsuario()==="admin"))
      this.router.navigate(['/noprivilege']);
    const todo = document.getElementById("todo");
    if (todo !== null) {
      todo.hidden = true;
    }
    this.usuarios = [];
    this.usuariosVer = [];
    await this.getUsuarios();
    if (todo !== null) {
      todo.hidden = false;
    }
    this.generaPaginas();
  }

  async getUsuarios() {
    this.usuarios = await this.usuarioService.getUsuarios().toPromise();
    //console.log(this.autobuses)
  }

  deleteUsuario(id: string) {
    console.log(id);
    this.usuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => {console.error(err)}
    );
  }

  paginar(indice: number): void {
    this.usuariosVer = [];
    for (var i = indice; i < this.numPagina + indice && i < this.usuarios.length; i++) {
      this.usuariosVer.push(this.usuarios[i]);
    }
    this.indActual = indice;
  }

  generaPaginas(): void {
    this.indices = [];
    var elem = Math.ceil(this.usuarios.length/this.numPagina);
    console.log(elem);
    for (var i: number = 1; i <= elem; i++) {
      this.indices.push({
        pagina: i,
        indice: (i-1) * this.numPagina
      });
      this.maxIndice = (i-1) * this.numPagina;
    }   
    this.paginar(0);
  }

  setAgente(id: string) {
    this.usuarioService.setAgente(id).subscribe(
      res => {
        if (res === "correcto") {
          console.log(res);
          this.usuarios.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
          this.usuariosVer.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
        }
      },
      err => { console.log(err); }
    );
  }

  setAdmin(id: string) {
    this.usuarioService.setAdmin(id).subscribe(
      res => {
        if (res === "correcto") {
          console.log(res);
          this.usuarios.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
          this.usuariosVer.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
        }
      },
      err => { console.log(err); }
    );
  }

  setCliente(id: string) {
    console.log("COL")
    this.usuarioService.setCliente(id).subscribe(
      res => {
        if (res === "correcto") {
          console.log(res);
          this.usuarios.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
          this.usuariosVer.forEach((usu: any) => {
            if (usu.id_usua === id)
              usu.rol = 'AG'
          });
        }
      },
      err => { console.log(err); }
    );
  }
}
