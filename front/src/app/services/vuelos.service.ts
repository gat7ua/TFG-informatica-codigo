import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  API_URL = 'http://localhost:4500/api';

  constructor(private http: HttpClient) { }

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

  cuentaVuelos(id_aero: string, tipo: string): number {
    var consul;
    if (tipo == "ida") 
      this.http.get(`${this.API_URL}/aeropuerto/cuentaida/${id_aero}`).subscribe(
        res => { consul = res; },
        err => { console.log(err); }
      );
    else 
    this.http.get(`${this.API_URL}/aeropuerto/cuentavue/${id_aero}`).subscribe(
      res => { consul = res; },
      err => { console.log(err); }
    );
    console.log(consul);
    return 10;
  }

  public imprimirFecha(fecha: any): string {
    var pFec: Date = new Date(fecha);
    return pFec.getDate().toString().concat("/")
          .concat((pFec.getMonth()+1).toString()).concat("/")
          .concat(pFec.getFullYear().toString()).concat(" a las ")
          .concat(pFec.getHours().toString()).concat(":")
          .concat(pFec.getMinutes().toString())
        ;
  }
}
