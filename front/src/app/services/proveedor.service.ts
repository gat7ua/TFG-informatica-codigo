import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get(`${this.API_URL}/proveedor`);
  }

  getProveedor(id: string) {
    return this.http.get(`${this.API_URL}/proveedor/${id}`);
  }

  postProveedor(proveedor: Proveedor) {
    return this.http.post(`${this.API_URL}/proveedor`, proveedor);
  }

  deleteProveedor(id: string) {
    return this.http.delete(`${this.API_URL}/proveedor/${id}`);
  }

  putProveedor(proveedor: Proveedor) {
    return this.http.put(`${this.API_URL}/proveedor/${proveedor.id_prov}`, proveedor);
  }
}
