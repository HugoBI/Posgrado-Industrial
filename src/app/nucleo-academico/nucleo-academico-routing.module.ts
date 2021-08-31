import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NucleoAcademicoComponent } from './nucleo-academico.component';


const routes: Routes = [
                        {
                         path: '', component: NucleoAcademicoComponent
                        }
                       ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NucleoAcademicoRoutingModule { }
