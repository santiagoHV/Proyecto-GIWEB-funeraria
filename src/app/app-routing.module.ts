import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'gestor-funeraria', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'gestor-funeraria/data'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
