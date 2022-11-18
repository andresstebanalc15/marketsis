import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugares } from '../models/lugares';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  private urlEndPoint: string = 'http://localhost:8083';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  listar(): Observable<Lugares[]> {
    return this.http.get<Lugares[]>(this.urlEndPoint);
  }

  ver(id: number): Observable<Lugares> {
    return this.http.get<Lugares>(`${this.urlEndPoint}/${id}`);
  }

  crear(lugares: Lugares): Observable<Lugares> {
    return this.http.post<Lugares>(this.urlEndPoint, lugares, {
      headers: this.httpHeaders,
    });
  }

  modificar(lugares: Lugares): Observable<Lugares> {
    return this.http.put<Lugares>(
      `${this.urlEndPoint}/${lugares.id}`,
      lugares,
      { headers: this.httpHeaders }
    );
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }
}
