import { Component, OnInit } from '@angular/core';
import { MediosTransporte } from 'src/app/models/medios-transporte';
import { MediosTransporteService } from 'src/app/services/medios-transporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medios-transporte',
  templateUrl: './medios-transporte.component.html',
})
export class MediosTransporteComponent implements OnInit {
  titulo: string = 'Lista de medios de transporte';
  lista: MediosTransporte[] = [];
  transportes: MediosTransporte = new MediosTransporte();


  constructor(private service: MediosTransporteService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => (this.lista = lista));
    console.log(this.lista);
  }
  
  public eliminar(transporte: MediosTransporte): void {
    Swal.fire({
      title: 'Cuidado!',
      text: `Seguro que desea eliminar a ${transporte.nombre_transporte}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(transporte.id).subscribe(() => {
          this.lista = this.lista.filter((p) => p !== transporte);
          Swal.fire(
            `Cliente ${transporte.nombre_transporte} eliminado con éxito`,
            'Excelente'
          );
        });
      }
    });
  }
}
