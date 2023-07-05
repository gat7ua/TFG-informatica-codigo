import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  API_URL = 'http://localhost:4500/api';

  private _num_prods = new BehaviorSubject<any>(0);
  public numProds = this._num_prods.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPedidos() {
    var idUsu = this.authService.getUserID();
    return this.http.get(`${this.API_URL}/pedido/cesta/` + idUsu);
  }

  getLineas() {
    var idUsu = this.authService.getUserID();
    return this.http.get(`${this.API_URL}/pedido/cesta/lineas/` + idUsu);
  }

  getPedido(id: string) {
    return this.http.get(`${this.API_URL}/pedido/${id}`);
  }

  eliminaLinea(id_pedi: string, linea: string) {
    console.log(`${this.API_URL}/pedido/${id_pedi}/${linea}`);
    return this.http.delete(`${this.API_URL}/pedido/${id_pedi}/${linea}`);
  }

  confirmaPedido(id: string) {
    return this.http.get(`${this.API_URL}/pedido/confirma/${id}`);
  }

  cancelaPedido(id: string) {
    return this.http.get(`${this.API_URL}/pedido/cancela/${id}`);
  }

  getNumProds() {
    var idUsu = this.authService.getUserID();
    this.http.get(`${this.API_URL}/pedido/cesta/prods/`+idUsu).subscribe(
      res => { this._num_prods.next(res); },
      err => { console.log(err); }
    );
  }
}
