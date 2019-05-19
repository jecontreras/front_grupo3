import { Injectable } from '@angular/core';
import  { Prestar } from './prestar';
import { of, Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private urlEndPoint:string = "http://192.168.1.8:8080/Biblioteca/rest/biblioteca/lista_libros";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) {
  }
  get():Observable<Prestar[]>{
    // return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Prestar[] )
    );
  }
  create(cliente: Prestar):Observable<Prestar>{
    return this.http.post<Prestar>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/libro']);
        console.error(e.error.mensaje);
        swal('Error al crear el Libro', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
  getCliente(id:any): Observable<Prestar>{
    return this.http.get<Prestar>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al Buscar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  update(cliente: Prestar): Observable<Prestar>{
    return this.http.put<Prestar>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
  delete(id: number): Observable<Prestar>{
    return this.http.delete<Prestar>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/libro']);
        console.error(e.error.mensaje);
        swal('Error al eliminar', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
}
