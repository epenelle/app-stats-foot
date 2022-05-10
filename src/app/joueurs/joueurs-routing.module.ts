import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoueursPage } from './joueurs.page';

const routes: Routes = [
  {
    path: '',
    component: JoueursPage
  },
  {
    path: 'ajouter-joueurs',
    loadChildren: () => import('./ajouter-joueurs/ajouter-joueurs.module').then( m => m.AjouterJoueursPageModule)
  },
  {
    path: 'infos-joueur',
    loadChildren: () => import('./infos-joueur/infos-joueur.module').then( m => m.InfosJoueurPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoueursPageRoutingModule {}
