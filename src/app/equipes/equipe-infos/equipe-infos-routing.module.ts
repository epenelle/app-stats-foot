import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipeInfosPage } from './equipe-infos.page';

const routes: Routes = [
  {
    path: '',
    component: EquipeInfosPage
  },
  {
    path: 'partie',
    loadChildren: () => import('./partie/partie.module').then( m => m.PartiePageModule)
  },
  {
    path: 'ajouter-partie',
    loadChildren: () => import('./ajouter-partie/ajouter-partie.module').then( m => m.AjouterPartiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeInfosPageRoutingModule {}
