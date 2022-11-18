import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:8081';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  listar(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.urlEndPoint);
  }

  ver(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.urlEndPoint}/${id}`);
  }

  crear(clientes: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.urlEndPoint, clientes, {
      headers: this.httpHeaders,
    });
  }

  modificar(clientes: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(
      `${this.urlEndPoint}/${clientes.id}`,
      clientes,
      { headers: this.httpHeaders }
    );
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
