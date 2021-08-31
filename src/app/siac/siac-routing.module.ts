import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiacComponent } from './siac.component';

const routes: Routes = [{ path: '', component: SiacComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiacRoutingModule { }
