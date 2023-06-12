import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class VuelosService extends ProductosService {

  getVuelos() { //TODO
    return this.http.get(`${this.API_URL}/vuelos`);
  }

  buscaVuelos(form: any) {
    return this.http.post(`${this.API_URL}/vuelos/busqueda`, form);
  }

  getVuelo(id: string) { //TODO
    return this.http.get(`${this.API_URL}/vuelos/${id}`);
  }

  postVuelo(vuelo: any) { //TODO
    return this.http.post(`${this.API_URL}/vuelos`, vuelo);
  }

  deleteVuelo(id: string) { //TODO
    return this.http.delete(`${this.API_URL}/vuelos/${id}`);
  }

  putVuelo(vuelo: any) { //TODO
    return this.http.put(`${this.API_URL}/vuelos/${vuelo.id_prod}`, vuelo);
  }

  getAeropuertos() { //TODO
    return this.http.get(`${this.API_URL}/aeropuerto`);
  }

  getAeropuerto(id: string) { //TODO
    return this.http.get(`${this.API_URL}/aeropuerto/${id}`);
  }

  postAeropuerto(aeropuerto: any) { //TODO
    return this.http.post(`${this.API_URL}/aeropuerto`, aeropuerto);
  }

  deleteAeropuerto(id: string) { //TODO
    return this.http.delete(`${this.API_URL}/aeropuerto/${id}`);
  }

  putAeropuerto(aeropuerto: any) { //TODO
    return this.http.put(`${this.API_URL}/aeropuerto/${aeropuerto.id_aero}`, aeropuerto);
  }
}
