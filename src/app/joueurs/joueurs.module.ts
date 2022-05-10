import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoueursPageRoutingModule } from './joueurs-routing.module';

import { JoueursPage } from './joueurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoueursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [JoueursPage]
})
export class JoueursPageModule {}
