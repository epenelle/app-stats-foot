import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipeInfosPageRoutingModule } from './equipe-infos-routing.module';

import { EquipeInfosPage } from './equipe-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipeInfosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EquipeInfosPage]
})
export class EquipeInfosPageModule {}
