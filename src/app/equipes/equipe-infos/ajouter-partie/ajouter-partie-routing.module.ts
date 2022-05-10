import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPartiePage } from './ajouter-partie.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPartiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPartiePageRoutingModule {}
