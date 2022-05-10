import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterJoueursPageRoutingModule } from './ajouter-joueurs-routing.module';

import { AjouterJoueursPage } from './ajouter-joueurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterJoueursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AjouterJoueursPage]
})
export class AjouterJoueursPageModule {}
