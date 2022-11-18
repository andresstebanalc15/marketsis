import { Component, OnInit } from '@angular/core';
import { Lugares } from 'src/app/models/lugares';
import { LugaresService } from 'src/app/services/lugares.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent implements OnInit {
  lista: Lugares[] = [];
  titulo: string = 'Lista de lugares';
  lugares: Lugares = new Lugares();
  constructor(private service: LugaresService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => (this.lista = lista));
  }

  public eliminar(lugar: Lugares): void {
    Swal.fire({
      title: 'Cuidado!',
      text: `Seguro que desea eliminar a ${lugar.nombre_lugar}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(lugar.id).subscribe(() => {
          this.lista = this.lista.filter((p) => p !== lugar);
          Swal.fire(
            `Cliente ${lugar.nombre_lugar} eliminado con éxito`,
            'Excelente'
          );
        });
      }
    });
  }
}
