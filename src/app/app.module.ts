import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { DirectivaComponent } from './directiva/directiva.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './libro/form/form.component';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from './libro/libro.component';
import { PrestarComponent } from './prestar/prestar.component';
import { FormprestarComponent } from './prestar/formprestar/formprestar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    DirectivaComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    LibroComponent,
    PrestarComponent,
    FormprestarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
