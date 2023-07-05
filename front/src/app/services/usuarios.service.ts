import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getUsuarios() { 
    return this.http.get(`${this.API_URL}/usuario`);
  }

  getUsuario(email: string) { 
    return this.http.get(`${this.API_URL}/usuario/${email}`);
  }

  postUsuario(user: Usuario) { 
    return this.http.post(`${this.API_URL}/usuario/registrar`, user);
  }

  deleteUsuario(id: string) { 
    return this.http.delete(`${this.API_URL}/usuario/${id}`);
  }

  putUsuario(user: Usuario) { 
    return this.http.put(`${this.API_URL}/usuario/${user.id_usua}`, user);
  }

  setAgente(id: string) {
    return this.http.put(`${this.API_URL}/usuario/sag/${id}`, null);
  }

  setAdmin(id: string) {
    return this.http.put(`${this.API_URL}/usuario/sad/${id}`, null);
  }

  setCliente(id: string) {
    return this.http.put(`${this.API_URL}/usuario/sac/${id}`, null);
  }
}
