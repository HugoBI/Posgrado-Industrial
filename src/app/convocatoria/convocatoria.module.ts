import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvocatoriaRoutingModule } from './convocatoria-routing.module';
import { ConvocatoriaComponent } from './convocatoria.component';


@NgModule({
  declarations: [ConvocatoriaComponent],
  imports: [
    CommonModule,
    ConvocatoriaRoutingModule
  ]
})
export class ConvocatoriaModule { }
