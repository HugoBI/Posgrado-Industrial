import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { EstudiantesComponent } from './estudiantes.component';
import { PerfilIngresoComponent } from './perfil-ingreso/perfil-ingreso.component';
import { PerfilEgresoComponent } from './perfil-egreso/perfil-egreso.component';
import { GeneracionesComponent } from './generaciones/generaciones.component';
import { EgresadosComponent } from './egresados/egresados.component';
import { ProTitulacionComponent } from './pro-titulacion/pro-titulacion.component';
import { EstanciasComponent } from './estancias/estancias.component';

const routes: Routes = [
                        {
                          path: '', component: EstudiantesComponent
                        },
                        {
                          path: 'perfil-ingreso', component: PerfilIngresoComponent
                        },
                        {
                          path: 'perfil-egreso', component: PerfilEgresoComponent
                        },
                        {
                          path: 'generaciones', component: GeneracionesComponent
                        },
                        {
                          path: 'egresados', component: EgresadosComponent
                        },
                        {
                          path: 'proceso-titulacion', component: ProTitulacionComponent
                        },
                        {
                          path: 'estancias', component: EstanciasComponent
                        }
                      ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
