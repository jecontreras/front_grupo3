import { Component, OnInit } from '@angular/core';
import  { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] ;
  constructor(
    private clienteService: ClienteService
  ) {
  }

  ngOnInit() {
    // this.clientes = this.clienteService.getclientes();
    this.clienteService.getclientes()
    .subscribe(
      clientes => {
        console.log(clientes);
        this.clientes = clientes
      }
    );
  }
  delete(cliente: Cliente): void{
    // swal({
    //   title: "Estas Seguro?",
    //   text: "¿Seguro que deseas eliminar al cliente?"+cliente.nombre+' '+ cliente.apellido,
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //     this.clienteService.delete(cliente.id).subscribe(
    //       (response: any)=>{
    //         this.clientes = this.clientes.filter(cli=> cli !== cliente);
    //         swal("Cliente Eliminado!", {
    //           icon: "success",
    //         });
    //       }
    //     )
    //   } else {
    //     swal("Cancelado!");
    //   }
    // });
  }


}
