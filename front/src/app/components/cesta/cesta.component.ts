import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { bootstrapApplication as bootstrap } from '@angular/platform-browser';
import { Modal } from 'bootstrap'

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss']
})
export class CestaComponent {

  constructor (protected authService: AuthService, private pedidosService: PedidosService, private router: Router, private dataService: DataService) {}

  pedidos: any = [];
  pedidosP: any = [];
  pedidosC: any = [];
  pedidosX: any = [];
  lineas: any = [];
  
  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    this.getPedidos();
  }

  getPedidos() {
    this.pedidos = [];
    this.pedidosP = [];
    this.pedidosC = [];
    this.pedidosX = [];
    this.lineas = [];
    this.pedidosService.getPedidos().subscribe(
      res => {
        this.pedidos = res;
        for (let p of this.pedidos) {
          if (!p.estadoPedido) 
            continue;
          if (p.estadoPedido == 'P')
            this.pedidosP.push(p);
          if (p.estadoPedido == 'C')
            this.pedidosC.push(p);
          if (p.estadoPedido == 'X')
            this.pedidosX.push(p);
        }
        this.pedidosService.getLineas().subscribe(
          res => {
            this.lineas = res;
          },
          err => { console.log(err); }
        );
      },
      err => console.error(err)
    );
  }

  lineasPedido(id_pedi: number) {
    var line: any = [];
    for (let l of this.lineas) {
      if (l.id_pedi == id_pedi)
        line.push(l);
    }
    line.sort((a: any, b: any) => {
      if (a.linea < b.linea)
        return -1;
      return 1;
    });
    return line;
  }

  eliminaLineas(id_pedi: number) {
    for (let l of this.lineasPedido(id_pedi))
      this.eliminaLinea(id_pedi, l.linea);
  }

  totalPedido(id_pedi: number) {
    var total: number = 0; 
    for (let l of this.lineasPedido(id_pedi))
      total += l.importe;
    return total;
  }

  eliminaLinea(id: number, linea: number) {
    this.pedidosService.eliminaLinea(id.toString(), linea.toString()).subscribe(
      res => {
        console.log(res);
        this.getPedidos();
      },
      err => { console.log(err); }
    );
  }

  traduceCategoria(unidades: number, tipo: string, clase: string) {
    return tipo == 'A' ? unidades.toString() + " unidades" : (clase != null ? (clase == 'B' ? unidades.toString() + " unidades en bussiness" : unidades.toString() + " unidades en primera") : unidades.toString() + " unidades en turista");
  }

  getPedidoP() {
    return this.pedidosP[0];
  }

  confirmarPedido() {
    this.dataService.setArrayEl1(this.getPedidoP());
    this.dataService.setArrayEl2(this.lineasPedido(this.getPedidoP().id_pedi));
    this.router.navigate(['/paspago']);
  }

  cancelaPedido(id: string) {
    console.log(id);
    this.pedidosService.cancelaPedido(id).subscribe(
      res => {
        console.log(res);
        this.getPedidos();
      },
      err => {console.error(err)}
    );
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
