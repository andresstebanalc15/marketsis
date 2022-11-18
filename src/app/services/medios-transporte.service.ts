import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediosTransporte } from '../models/medios-transporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediosTransporteService {
  private urlEndPoint: string = 'http://localhost:8082/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  listar(): Observable<MediosTransporte[]> {
    return this.http.get<MediosTransporte[]>(this.urlEndPoint);
  }

  ver(id: number): Observable<MediosTransporte> {
    return this.http.get<MediosTransporte>(`${this.urlEndPoint}/${id}`);
  }

  crear(tranporte: MediosTransporte): Observable<MediosTransporte> {
    return this.http.post<MediosTransporte>(this.urlEndPoint, tranporte, {
      headers: this.httpHeaders,
    });
  }

  modificar(tranporte: MediosTransporte): Observable<MediosTransporte> {
    return this.http.put<MediosTransporte>(
      `${this.urlEndPoint}/${tranporte.id}`,
      tranporte,
      { headers: this.httpHeaders }
    );
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
