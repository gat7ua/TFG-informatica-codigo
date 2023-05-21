import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutobusesService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getAutobuses() { //TODO
    return this.http.get(`${this.API_URL}/autobuses`);
  }

  buscaAutobus(form: any) {
    return this.http.post(`${this.API_URL}/autobuses/busqueda`, form);
  }

  getAutobus(id: string) { //TODO
    return this.http.get(`${this.API_URL}/autobuses/${id}`);
  }

  postAutobus() { //TODO
    //return this.http.post(`${this.API_URL}/ciudad`, ciudad);
  }

  deleteAutobus(id: string) { //TODO
    //return this.http.delete(`${this.API_URL}/ciudad/${id}`);
  }

  putAutobus() { //TODO
    //return this.http.put(`${this.API_URL}/ciudad/${ciudad.id_ciud}`, ciudad);
  }

  getEstsAutobus() { //TODO
    return this.http.get(`${this.API_URL}/estautobus`);
  }

  getEstAutobus(id: string) { //TODO
    return this.http.get(`${this.API_URL}/estautobus/${id}`);
  }

  postEstAutobus(estautobus: any) { //TODO
    return this.http.post(`${this.API_URL}/estautobus`, estautobus);
  }

  deleteEstAutobus(id: string) { //TODO
    return this.http.delete(`${this.API_URL}/estautobus/${id}`);
  }

  putEstAutobus(estautobus: any) { //TODO
    return this.http.put(`${this.API_URL}/estautobus/${estautobus.id_esau}`, estautobus);
  }
}
