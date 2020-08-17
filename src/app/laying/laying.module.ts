import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayingPageRoutingModule } from './laying-routing.module';

import { LayingPage } from './laying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayingPageRoutingModule
  ],
  declarations: [LayingPage]
})
export class LayingPageModule {}
