import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramaAcademicoRoutingModule } from './programa-academico-routing.module';
import { ProgramaAcademicoComponent } from './programa-academico.component';


@NgModule({
  declarations: [ProgramaAcademicoComponent],
  imports: [
    CommonModule,
    ProgramaAcademicoRoutingModule
  ]
})
export class ProgramaAcademicoModule { }
