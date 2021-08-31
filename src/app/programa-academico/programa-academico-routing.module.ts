import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaAcademicoComponent } from './programa-academico.component';

const routes: Routes = [{ path: '', component: ProgramaAcademicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaAcademicoRoutingModule { }
