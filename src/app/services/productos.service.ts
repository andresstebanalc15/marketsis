import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint:string = 'http://localhost:8090/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'}); 
  constructor(private http:HttpClient) { }
 

  listar():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.urlEndPoint);
  }

  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams().set('page',page).set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }

  ver(id:number):Observable<Productos>{
    return this.http.get<Productos>(`${this.urlEndPoint}/${id}`);
  }

  crear(producto:Productos):Observable<Productos>{
    return this.http.post<Productos>(this.urlEndPoint,producto,{headers: this.httpHeaders});
  }

  modificar(producto:Productos):Observable<Productos>{
    return this.http.put<Productos>(`${this.urlEndPoint}/${producto.id}`, producto,{headers: this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

  crearConImagen(producto:Productos, archivo:File): Observable<Productos>{
    const formData = new FormData();
    formData.append('archivo',archivo);
    formData.append('codigo',producto.codigo);
    formData.append('nombre',producto.nombre);
    formData.append('precio',producto.precio.toString());
    formData.append('stock',producto.stock.toString());
    formData.append('id_empresa',producto.id_empresa.toString());
    return this.http.post<Productos>(this.urlEndPoint + '/crear-con-imagen',formData);
  }

  modificarConImagen(producto:Productos, archivo:File): Observable<Productos>{
    const formData = new FormData();
    formData.append('archivo',archivo);
    formData.append('codigo',producto.codigo);
    formData.append('nombre',producto.nombre);
    formData.append('precio',producto.precio.toString());
    formData.append('stock',producto.stock.toString());
    formData.append('id_empresa',producto.id_empresa.toString());
    return this.http.put<Productos>(`${this.urlEndPoint}/editar-con-imagen/${producto.id}`,formData);
  }
   
}
