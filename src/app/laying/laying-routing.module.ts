import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayingPage } from './laying.page';

const routes: Routes = [
  {
    path: '',
    component: LayingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayingPageRoutingModule {}
