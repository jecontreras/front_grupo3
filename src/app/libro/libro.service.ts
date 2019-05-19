import { Injectable } from '@angular/core';
import  { Libro } from './libro';
import { of, Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private urlEndPoint:string = "http://192.168.1.8:8080/Biblioteca/rest/biblioteca/";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {
  }
  get():Observable<Libro[]>{
    // return of(CLIENTES);
    return this.http.get(this.urlEndPoint+'lista_libros').pipe(
      map((response) => response as Libro[] )
    );
  }
  create(cliente: Libro):Observable<Libro>{
    return this.http.post<Libro>(this.urlEndPoint+'registrar_libros', cliente, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/libro']);
        console.error(e);
        swal('Error al crear el Libro', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
  getCliente(id:any): Observable<Libro>{
    return this.http.get<Libro>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al Buscar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  update(cliente: Libro): Observable<Libro>{
    return this.http.put<Libro>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
  delete(id: number): Observable<Libro>{
    return this.http.delete<Libro>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders}).pipe(
      catchError(e =>{
        this.router.navigate(['/libro']);
        console.error(e.error.mensaje);
        swal('Error al eliminar', e.error.mensaje, 'error');
        return throwError(e);
      }));
  }
  }
