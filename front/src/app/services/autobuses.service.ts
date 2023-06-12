import { Injectable } from '@angular/core';
import { Autobus } from '../models/Autobus';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class AutobusesService extends ProductosService {

  getAutobuses() {
    return this.http.get(`${this.API_URL}/autobuses`);
  }

  buscaAutobus(form: any) {
    return this.http.post(`${this.API_URL}/autobuses/busqueda`, form);
  }

  getAutobus(id: string) {
    return this.http.get(`${this.API_URL}/autobuses/${id}`);
  }

  postAutobus(autobus: Autobus) {
    return this.http.post(`${this.API_URL}/autobuses`, autobus);
  }

  deleteAutobus(id: string) {
    return this.http.delete(`${this.API_URL}/autobuses/${id}`);
  }

  putAutobus(autobus: Autobus) {
    return this.http.put(`${this.API_URL}/autobuses/${autobus.id_prod}`, autobus);
  }

  getEstsAutobus() { 
    return this.http.get(`${this.API_URL}/estautobus`);
  }

  getEstAutobus(id: string) { 
    return this.http.get(`${this.API_URL}/estautobus/${id}`);
  }

  postEstAutobus(estautobus: any) { 
    return this.http.post(`${this.API_URL}/estautobus`, estautobus);
  }

  deleteEstAutobus(id: string) { 
    return this.http.delete(`${this.API_URL}/estautobus/${id}`);
  }

  putEstAutobus(estautobus: any) {
    return this.http.put(`${this.API_URL}/estautobus/${estautobus.id_esau}`, estautobus);
  }
}
