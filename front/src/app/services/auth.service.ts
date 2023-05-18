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
  
  getUserDetails() {
    if(localStorage.getItem('userData'))
      return localStorage.getItem('userData');
    else
      return null;    
  }

  setDataInLocalStorage(variableName: string, data: any) {
      localStorage.setItem(variableName, data);
  }

  getToken() {
      return localStorage.getItem('token');
  }

  clearStorage() {
      localStorage.clear();
  }

  getUser(){
    return localStorage.getItem('user');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/publict']);
  }
}
