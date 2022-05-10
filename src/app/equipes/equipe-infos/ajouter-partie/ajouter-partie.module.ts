import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterPartiePageRoutingModule } from './ajouter-partie-routing.module';

import { AjouterPartiePage } from './ajouter-partie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPartiePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AjouterPartiePage]
})
export class AjouterPartiePageModule {}
