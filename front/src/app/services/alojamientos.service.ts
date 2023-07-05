import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class AlojamientosService extends ProductosService {

  getalojamientos() { //TODO
    return this.http.get(`${this.API_URL}/alojamientos`);
  }

  buscaalojamientos(form: any) {
    return this.http.post(`${this.API_URL}/alojamientos/busqueda`, form);
  }

  getalojamiento(id: string) { //TODO
    return this.http.get(`${this.API_URL}/alojamientos/${id}`);
  }

  postalojamiento(alojamiento: any) { //TODO
    return this.http.post(`${this.API_URL}/alojamientos`, alojamiento);
  }

  deletealojamiento(id: string) { //TODO
    return this.http.delete(`${this.API_URL}/alojamientos/${id}`);
  }

  putalojamiento(alojamiento: any) { //TODO
    return this.http.put(`${this.API_URL}/alojamientos/${alojamiento.id_prod}`, alojamiento);
  }

  decodeCodAloj(cod: string) {
    if (cod == 'HO')
      return 'Hotel';
    if (cod == 'HS')
      return 'Hostal';
    if (cod == 'AL')
      return 'Albergue';
    if (cod == 'AP')
      return 'Apartamento';
    return '';
  }
}
