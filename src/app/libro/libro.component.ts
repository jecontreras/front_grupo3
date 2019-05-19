import { Component, OnInit } from '@angular/core';
import { LibroService } from './libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  public lista:any = [];
  
  constructor(
    private _LibroService: LibroService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this._LibroService.get()
    .subscribe(
      rta => {
        console.log(rta);
        this.lista = rta;
      }
    );
  }


}
