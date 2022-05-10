import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosJoueurPage } from './infos-joueur.page';

const routes: Routes = [
  {
    path: '',
    component: InfosJoueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosJoueurPageRoutingModule {}
