import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LibroComponent } from './libro/libro.component';
// import { FormComponent } from './clientes/form.component';
import { FormComponent } from './libro/form/form.component';
import { PrestarComponent } from './prestar/prestar.component';

const routes: Routes = [
  {path: '', redirectTo: '/libro', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent },
  {path: 'libro', component: LibroComponent },
  {path: 'libro/form', component: FormComponent },
  {path: 'libro/form/:id', component: FormComponent },
  {path: 'prestar', component: PrestarComponent },
  {path: 'prestar/form', component: PrestarComponent },
  {path: 'prestar/form/:id', component: PrestarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
