import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoAcademicoRoutingModule } from './nucleo-academico-routing.module';
import { NucleoAcademicoComponent } from './nucleo-academico.component';
import { ModalDocenteComponent } from './modal-docente/modal-docente.component';




@NgModule({

  declarations: [
    NucleoAcademicoComponent,
    ModalDocenteComponent
  ],

  imports: [
    CommonModule,
    NucleoAcademicoRoutingModule
  ]
})

export class NucleoAcademicoModule { }
