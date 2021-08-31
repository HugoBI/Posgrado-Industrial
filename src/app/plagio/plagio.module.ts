import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlagioRoutingModule } from './plagio-routing.module';
import { PlagioComponent } from './plagio.component';


@NgModule({
  declarations: [PlagioComponent],
  imports: [
    CommonModule,
    PlagioRoutingModule
  ]
})
export class PlagioModule { }
