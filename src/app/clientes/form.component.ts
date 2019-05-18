import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear libro";
  constructor(
    private _ClienteService: ClienteService,
    private router: Router,
    private activatedrouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarCliente();
  }
  cargarCliente():void{
    this.activatedrouter.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this._ClienteService.getCliente(id).subscribe((cliente)=>this.cliente = cliente);
      }
    })
  }
  public create(){
    console.log(this.cliente);
    this._ClienteService.create(this.cliente).subscribe(
      (response: any) => {
        this.router.navigate(['/clientes'])
        swal('Nuevo Cliente','creado con exito!', 'success');
      }
    )
    ;
  }
  update (): void{
    this._ClienteService.update(this.cliente)
    .subscribe(
      (cliente: any)=>{
        this.router.navigate(['/clientes'])
        swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con exito!`, 'success');
      }
    )
  }
}
