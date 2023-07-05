import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  numProds: any;

  constructor (protected authService: AuthService, protected pedidosService: PedidosService) {}

  ngOnInit() {
    this.pedidosService.numProds.subscribe((num) => {this.numProds = num;});
    this.pedidosService.getNumProds();
  }

}
