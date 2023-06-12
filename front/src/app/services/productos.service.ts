import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  API_URL = 'http://localhost:4500/api';

  constructor(protected http: HttpClient, private authService: AuthService) { }

  public imprimirFecha(fecha: any): string {
    var pFec: Date = new Date(fecha);
    return pFec.getDate().toString().concat("/")
          .concat((pFec.getMonth()+1).toString()).concat("/")
          .concat(pFec.getFullYear().toString()).concat(" a las ")
          .concat(pFec.getHours().toString()).concat(":")
          .concat(pFec.getMinutes().toString())
        ;
  }

  public anyadeProdCesta(prod: any) {
    prod.id_usua = this.authService.getUser().id_usua;
    return this.http.post<any>(this.API_URL + "/pedido", prod);
  }
}
