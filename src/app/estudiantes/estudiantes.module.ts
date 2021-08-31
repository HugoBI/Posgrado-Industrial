import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { EgresadosComponent } from './egresados/egresados.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { GeneracionesComponent } from './generaciones/generaciones.component';
import { PerfilEgresoComponent } from './perfil-egreso/perfil-egreso.component';
import { PerfilIngresoComponent } from './perfil-ingreso/perfil-ingreso.component';
import { ProTitulacionComponent } from './pro-titulacion/pro-titulacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     EstudiantesComponent,
     EgresadosComponent,
     EstanciasComponent,
     GeneracionesComponent,
     PerfilEgresoComponent,
     PerfilIngresoComponent,
     ProTitulacionComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule
  ]
})
export class EstudiantesModule { }
