import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Cuidado!',
      text: `Seguro que desea eliminar a ${cliente.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(cliente.id).subscribe(() => {
          this.lista = this.lista.filter((p) => p !== cliente);
          Swal.fire(
            `Cliente ${cliente.nombre} eliminado con éxito`,
            'Excelente'
          );
        });
      }
    });
  }
}
