import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultLoadPageRoutingModule } from './result-load-routing.module';

import { ResultLoadPage } from './result-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultLoadPageRoutingModule
  ],
  declarations: [ResultLoadPage]
})
export class ResultLoadPageModule {}
