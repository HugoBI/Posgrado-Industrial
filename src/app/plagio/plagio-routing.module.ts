import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlagioComponent } from './plagio.component';

const routes: Routes = [{ path: '', component: PlagioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlagioRoutingModule { }
