import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CablePage } from './cable.page';

const routes: Routes = [
  {
    path: '',
    component: CablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CablePageRoutingModule {}
