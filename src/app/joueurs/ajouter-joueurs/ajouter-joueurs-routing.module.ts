import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterJoueursPage } from './ajouter-joueurs.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterJoueursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterJoueursPageRoutingModule {}
