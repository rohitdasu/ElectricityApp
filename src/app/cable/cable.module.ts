import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CablePageRoutingModule } from './cable-routing.module';

import { CablePage } from './cable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CablePageRoutingModule
  ],
  declarations: [CablePage]
})
export class CablePageModule {}
