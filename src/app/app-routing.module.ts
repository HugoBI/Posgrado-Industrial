import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
                        {
                          path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
                        },
                        {
                          path: 'vinculacion', loadChildren: () => import('./vinculacion/vinculacion.module').then(m => m.VinculacionModule)
                        },
                        {
                          path: 'plagio', loadChildren: () => import('./plagio/plagio.module').then(m => m.PlagioModule)
                        },
                        {
                          path: 'convocatoria', loadChildren: () => import('./convocatoria/convocatoria.module').then(m => m.ConvocatoriaModule)
                        },
                        {
                          path: 'nucleo-academico', loadChildren: () => import('./nucleo-academico/nucleo-academico.module').then(m => m.NucleoAcademicoModule)
                        },
                        {
                          path: 'repositorio', loadChildren: () => import('./repositorio/repositorio.module').then(m => m.RepositorioModule)
                        },
                        {
                          path: 'programa-academico', loadChildren: () => import('./programa-academico/programa-academico.module').then(m => m.ProgramaAcademicoModule)
                        },
                        {
                          path: 'estudiantes', loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule)
                        },
                        {
                          path: 'siac', loadChildren: () => import('./siac/siac.module').then(m => m.SiacModule)
                        },
                        {
                          path: '**', pathMatch: 'full', redirectTo: 'inicio'
                        }
                       ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
