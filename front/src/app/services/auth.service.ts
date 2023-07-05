import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

import * as shajs from 'sha.js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  miIp = "localhost";
  miPuerto = "4500";
  private URL = `http://${this.miIp}:${this.miPuerto}/api`;

  private usuario: Usuario | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  getUsuario(email: string) {
    return this.http.get<any>(this.URL + '/usuario/' + email);
  }

  async putUsuario(usuario: Usuario): Promise<string> {
    await this.http.put<any>(this.URL + '/usuario/' + usuario.id_usua, usuario).subscribe(
      async res => {
        if (usuario.email)
          await this.getUsuario(usuario.email).subscribe(
            res => {
              var tk = this.getUser().token;
              this.usuario = res;
              if (this.usuario)
                this.usuario.token = tk;
              localStorage.setItem("usuario", JSON.stringify(usuario));
              return "correcto";
            }
          );
      }
    );
    return "error";
  }

  private async generarToken(email: string) {
    try {
      const rol = await this.getRol(email);
      const cade: string = email + Date.now().toString() + Math.floor(Math.random() * 150).toString();
      const hashedCade = shajs('sha256').update(cade).digest('hex');
  
      if (rol == "admin")
        return "1" + hashedCade;
      else if (rol == "agente")
        return "2" + hashedCade;
      else if (rol == "cliente")
        return "0" + hashedCade;
      else
        return "error";
    } catch (error) {
      console.error(error);
      return "error";
    }
  }
  
  loggedIn() {
    return !(this.getUser() == "{}")
  }

  private async getRol(email: string) {
    try {
      const res = await this.http.get<any>(this.URL + '/usuario/rol/' + email).toPromise();
      return res.rol || ""; // Si res.rol es undefined o null, devuelve una cadena vacía
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  getRolUsuario() {
    var user = this.getUser();
    if (user == "{}")
      return "no hay usuario";
    var token: string = user.token;
    var rol = token.substring(0, 1);
    switch (rol) {
      case "0":
        return "cliente";
      case "1":
        return "admin";
      case "2": 
        return "agente";
    }
    return "no hay usuario";
  }

  getUsu(id: string) {
    return this.http.get<any>(this.URL + '/usuario/id/' + id);
  }

  async loginToken() {
    const user = this.getUserLS();
    if (user === "{}") {
      return;
    }
  
    try {
      const res = await this.http.post<any>(this.URL + '/usuario/login', user).toPromise();
      const resu = res.text;
      
      if (resu === 'correcto') {
        const res2 = await this.http.post<any>(this.URL + '/usuario/token/verif', user).toPromise();
        
        if (res2.text === 'correcto') {
          this.usuario = user;
          console.log("Sesión iniciada con token");
          return;
        } else {
          this.logOut();
        }
      } else
        this.logOut();
    } catch (err) {
      console.error(err);
    }
  }

  async login(usuario: Usuario) {
    try {
      const res = await this.http.post<any>(this.URL + '/usuario/login', usuario).toPromise();
      const resu = res.text;
      
      if (resu === 'correcto') {
        if (usuario.email !== undefined) {
          const res2 = await this.getUsuario(usuario.email).toPromise();
          usuario = res2;
  
          var token = "";
        if (!!usuario.email)
          token = await this.generarToken(usuario.email);
        usuario.token = token;
  
          const res3 = await this.http.post<any>(this.URL + '/usuario/token', usuario).toPromise();
  
          if (res3.text === 'token invalido') {
            return "error";
          }
  
          localStorage.setItem("usuario", JSON.stringify(usuario));
          this.usuario = usuario;
          return "correcto";
        }
        return "error";
      }
      
      return resu;
    } catch (err) {
      console.error(err);
      return "error";
    }
  }

  async registro(usuario: Usuario) {
    try {
      const res = await this.http.post<any>(this.URL + '/usuario/registrar', usuario).toPromise();
  
      if (res.text !== 'usuario creado') {
        return "error";
      }
  
      if (usuario.email !== undefined) {
        const res2 = await this.getUsuario(usuario.email).toPromise();
        usuario = res2;
  
        var token = "";
        if (!!usuario.email)
          token = await this.generarToken(usuario.email);
        usuario.token = token;
  
        const res3 = await this.http.post<any>(this.URL + '/usuario/token', usuario).toPromise();
  
        if (res3.text === 'token invalido') {
          return "error";
        }
  
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.usuario = usuario;
        return "correcto";
      }
      return "error";
    } catch (err) {
      console.error(err);
      return "error";
    }
  }  

  getUserName() {
    var user = this.getUser();
    if (user != "{}")
      return user.nombre;
    return "";   
  }

  getUserID() {
    var user = this.getUser();
    if (user != "{}")
      return user.id_usua;
    return 0;  
  }

  getUserLS(){
    var user = localStorage.getItem("usuario");
    if (user != null) 
      return JSON.parse(user);
    return "{}";
  }

  getUser(){
    if (this.usuario != null) 
      return  JSON.parse(JSON.stringify(this.usuario));
    return "{}";
  }

  logOut(){
    this.usuario = null;
    localStorage.removeItem('usuario');
    if (this.router.url === '/') {
      window.location.reload();
    } else {
      this.router.navigate(['/']);
    }
  }
}
