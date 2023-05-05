import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  miIp = "localhost";
  miPuerto = "4500";
  private URL = `http://${this.miIp}:${this.miPuerto}/api`;

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario) {
    return this.http.post<any>(this.URL + '/', usuario);
  }

  registro(usuario: Usuario) {
    return this.http.post<any>(this.URL + '/usuario/registrar', usuario);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getToken(){
    return 'buenaonda';
  }

  getUser(){
    return localStorage.getItem('user');
  }

  reservar(item: any) {
    return this.http.post<any>(this.URL + `/${item.prov}/reserva/${this.getUser()}/${item.id}`, item);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/publict']);
  }
}
