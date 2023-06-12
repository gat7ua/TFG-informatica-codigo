import { Injectable } from '@angular/core';
import { Tren } from '../models/Tren';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class TrenesService extends ProductosService {

  getTrenes() { 
    return this.http.get(`${this.API_URL}/trenes`);
  }

  buscaTrenes(form: any) {
    return this.http.post(`${this.API_URL}/trenes/busqueda`, form);
  }

  getTren(id: string) { 
    return this.http.get(`${this.API_URL}/trenes/${id}`);
  }

  postTren(tren: Tren) { 
    return this.http.post(`${this.API_URL}/trenes`, tren);
  }

  deleteTren(id: string) { 
    return this.http.delete(`${this.API_URL}/trenes/${id}`);
  }

  putTren(tren: Tren) { 
    return this.http.put(`${this.API_URL}/trenes/${tren.id_prod}`, tren);
  }

  getEstsTren() { 
    return this.http.get(`${this.API_URL}/esttren`);
  }

  getEstTren(id: string) { 
    return this.http.get(`${this.API_URL}/esttren/${id}`);
  }

  postEstTren(esttren: any) { 
    return this.http.post(`${this.API_URL}/esttren`, esttren);
  }

  deleteEstTren(id: string) {
    return this.http.delete(`${this.API_URL}/esttren/${id}`);
  }

  putEstTren(esttren: any) { 
    return this.http.put(`${this.API_URL}/esttren/${esttren.id_estr}`, esttren);
  }
}
