import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Pedido } from 'src/app/models/Pedido';
import { DataService } from 'src/app/services/data.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.scss']
})
export class PasarelaPagoComponent {

  constructor (private dataService: DataService, private pedidoService: PedidosService, private router: Router, protected authService: AuthService) {}

  pedido: Pedido = {
    id_pedi: 0,
    id_usua: 0,
    estado: ''
  };

  lineas: any = [];

  ngOnInit() {
    if (!this.authService.loggedIn())
      this.router.navigate(['/nologin']);
    const pedid = this.dataService.getArrayEl1();
    if (pedid)
      this.pedido = pedid;
    const line = this.dataService.getArrayEl2();
    if (line)
      this.lineas = line;
  }

  traduceCategoria(unidades: number, tipo: string, clase: string) {
    return tipo == 'A' ? "" : (clase != null ? (clase == 'B' ? unidades.toString() + " unidades en bussiness" : unidades.toString() + " unidades en primera") : unidades.toString() + " unidades en turista");
  }

  totalPedido() {
    var total: number = 0; 
    for (let l of this.lineas)
      total += l.importe;
    return total;
  }

  confirmarPedido() {
    if (!!this.pedido.id_pedi)
      this.pedidoService.confirmaPedido(this.pedido.id_pedi.toString()).subscribe(
        res => {
          this.router.navigate(['/cesta'])
        },
        err => { console.log(err); }
      );
  }
}
