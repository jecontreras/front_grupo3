import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import  { LibroService } from './../libro.service';
import  { Libro } from '../libro';
import swal from 'sweetalert';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public data: Libro = new Libro();
  public title: any = 'Crear Libro'

  constructor(
    private router: Router,
    private _LibroService: LibroService,
    private activatedrouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarLibro();
  }
  cargarLibro():void{
    this.activatedrouter.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.title='Eliminar Libro'
      }
    })
  }
  create(){
    console.log(this.data);
    const
      data: any = {
        cantidad: 1,
        nombre: 'cantando'
      }
    ;
    console.log(data);
    this._LibroService.create(this.data).subscribe(
      (response: any) => {
        this.router.navigate(['/libro']);
        swal('Nuevo Libro','creado con exito!', 'success');
      }
    )
    ;
  }
  eliminar(id: any){
    console.log(id);
    // if(id && this.data.cantidad){
    //   const
    //     query: any = {
    //       id: id,
    //       cantidad: this.data.cantidad
    //     }
    //   ;
    //   this._LibroService.delete(id)
    //   .subscribe(
    //     (res: any)=>{
    //       console.log(res);
    //     }
    //   )
    //   ;
    // }
  }

}
