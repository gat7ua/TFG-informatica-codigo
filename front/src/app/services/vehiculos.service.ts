import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService extends ProductosService {

  
  getVehiculos() {
    return this.http.get(`${this.API_URL}/vehiculos`);
  }

  buscaVehiculo(form: any) {
    return this.http.post(`${this.API_URL}/vehiculos/busqueda`, form);
  }

  getVehiculo(id: string) {
    return this.http.get(`${this.API_URL}/vehiculos/${id}`);
  }

  postVehiculo(vehiculo: any) {
    return this.http.post(`${this.API_URL}/vehiculos`, vehiculo);
  }

  deleteVehiculo(id: string) {
    return this.http.delete(`${this.API_URL}/vehiculos/${id}`);
  }

  putVehiculo(vehiculo: any) {
    return this.http.put(`${this.API_URL}/vehiculos/${vehiculo.id_prod}`, vehiculo);
  }

  getoficinasrent() { 
    return this.http.get(`${this.API_URL}/oficinarent`);
  }

  getoficinarent(id: string) { 
    return this.http.get(`${this.API_URL}/oficinarent/${id}`);
  }

  postoficinarent(oficinarent: any) { 
    return this.http.post(`${this.API_URL}/oficinarent`, oficinarent);
  }

  deleteoficinarent(id: string) { 
    return this.http.delete(`${this.API_URL}/oficinarent/${id}`);
  }

  putoficinarent(oficinarent: any) {
    return this.http.put(`${this.API_URL}/oficinarent/${oficinarent.id_ofre}`, oficinarent);
  }
}
