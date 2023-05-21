import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getTrenes() { //TODO
    return this.http.get(`${this.API_URL}/trenes`);
  }

  buscaTrenes(form: any) {
    return this.http.post(`${this.API_URL}/trenes/busqueda`, form);
  }

  getTren(id: string) { //TODO
    return this.http.get(`${this.API_URL}/trenes/${id}`);
  }

  postTren() { //TODO
    //return this.http.post(`${this.API_URL}/ciudad`, ciudad);
  }

  deleteTren(id: string) { //TODO
    //return this.http.delete(`${this.API_URL}/ciudad/${id}`);
  }

  putTren() { //TODO
    //return this.http.put(`${this.API_URL}/ciudad/${ciudad.id_ciud}`, ciudad);
  }

  getEstsTren() { //TODO
    return this.http.get(`${this.API_URL}/esttren`);
  }

  getEstTren(id: string) { //TODO
    return this.http.get(`${this.API_URL}/esttren/${id}`);
  }

  postEstTren(esttren: any) { //TODO
    return this.http.post(`${this.API_URL}/esttren`, esttren);
  }

  deleteEstTren(id: string) { //TODO
    return this.http.delete(`${this.API_URL}/esttren/${id}`);
  }

  putEstTren(esttren: any) { //TODO
    return this.http.put(`${this.API_URL}/esttren/${esttren.id_estr}`, esttren);
  }
}
