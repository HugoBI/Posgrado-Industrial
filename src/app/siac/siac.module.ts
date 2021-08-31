import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiacRoutingModule } from './siac-routing.module';
import { SiacComponent } from './siac.component';


@NgModule({
  declarations: [SiacComponent],
  imports: [
    CommonModule,
    SiacRoutingModule
  ]
})
export class SiacModule { }
