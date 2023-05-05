import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getVuelos() { //TODO
    return this.http.get(`${this.API_URL}/`);
  }

  buscaVuelos(form: any) {
    return this.http.post(`${this.API_URL}/vuelos/busqueda`, form);
  }

  getVuelo(id: string) { //TODO
    return this.http.get(`${this.API_URL}//${id}`);
  }

  postVuelo() { //TODO
    //return this.http.post(`${this.API_URL}/ciudad`, ciudad);
  }

  deleteVuelo(id: string) { //TODO
    //return this.http.delete(`${this.API_URL}/ciudad/${id}`);
  }

  putVuelo() { //TODO
    //return this.http.put(`${this.API_URL}/ciudad/${ciudad.id_ciud}`, ciudad);
  }

  getAeropuertos() { //TODO
    return this.http.get(`${this.API_URL}/aeropuerto`);
  }

  getAeropuerto(id: string) { //TODO
    return this.http.get(`${this.API_URL}//${id}`);
  }

  postAeropuerto() { //TODO
    //return this.http.post(`${this.API_URL}/ciudad`, ciudad);
  }

  deleteAeropuerto(id: string) { //TODO
    //return this.http.delete(`${this.API_URL}/ciudad/${id}`);
  }

  putAeropuerto() { //TODO
    //return this.http.put(`${this.API_URL}/ciudad/${ciudad.id_ciud}`, ciudad);
  }
}
