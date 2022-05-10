import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosJoueurPageRoutingModule } from './infos-joueur-routing.module';

import { InfosJoueurPage } from './infos-joueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosJoueurPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InfosJoueurPage]
})
export class InfosJoueurPageModule {}
