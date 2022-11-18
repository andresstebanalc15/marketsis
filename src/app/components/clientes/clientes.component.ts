import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  lista: Clientes[] = [];
  titulo: string = 'Lista de clientes';
  cliente: Clientes = new Clientes();

  constructor(private service: ClientesService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => (this.lista = lista));
  }

  public eliminar(cliente: Clientes): void {
    if (confirm(`Seguro que desea eliminar a ${cliente.nombre}`)) {
      this.service.eliminar(cliente.id).subscribe(() => {
        this.lista = this.lista.filter((p) => p !== cliente);
        alert(`Cliente ${cliente.nombre} eliminado con exito`);
      });
    }
  }
}
