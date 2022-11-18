import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
})
export class ClientesFormComponent implements OnInit {
  titulo: string = 'Crear nuevo cliente';
  cliente: Clientes = new Clientes();
  error: any;
  constructor(
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editar();
  }

  crear() {
    this.service.crear(this.cliente).subscribe(
      (cliente) => {
        Swal.fire(`Cliente ${cliente.nombre} creado con exito!`);
        this.router.navigate(['/clientes']);
      },
      (err) => {
        if (err.status === 400) {
          this.error = err.error;
        }
      }
    );
  }

  editar(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.service.ver(id).subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }

  modificar() {
    this.service.modificar(this.cliente).subscribe(
      (cliente) => {
        alert(`Cliente ${cliente.nombre} editado con exito!`);
        this.router.navigate(['/clientes']);
      },
      (err) => {
        if (err.status === 400) {
          this.error = err.error;
        }
      }
    );
  }
}
