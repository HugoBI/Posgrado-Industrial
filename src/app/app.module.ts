import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



//Service
import { DocenteService } from './nucleo-academico/docente.service';
import { GeneracionesService } from './estudiantes/services/generaciones.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DocenteService,
    GeneracionesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
