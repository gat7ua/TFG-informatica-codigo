import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ciudad } from '../models/Ciudad'

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getCiudades() {
    return this.http.get(`${this.API_URL}/ciudad`);
  }

  getCiudad(id: string) {
    return this.http.get(`${this.API_URL}/ciudad/${id}`);
  }

  postCiudad(ciudad: Ciudad) {
    return this.http.post(`${this.API_URL}/ciudad`, ciudad);
  }

  deleteCiudad(id: string) {
    return this.http.delete(`${this.API_URL}/ciudad/${id}`);
  }

  putCiudad(ciudad: Ciudad) {
    return this.http.put(`${this.API_URL}/ciudad/${ciudad.id_ciud}`, ciudad);
  }
}
