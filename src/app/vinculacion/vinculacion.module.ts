import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinculacionRoutingModule } from './vinculacion-routing.module';
import { VinculacionComponent } from './vinculacion.component';


@NgModule({
  declarations: [VinculacionComponent],
  imports: [
    CommonModule,
    VinculacionRoutingModule
  ]
})
export class VinculacionModule { }
