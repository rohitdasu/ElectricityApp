import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultLoadPage } from './result-load.page';

const routes: Routes = [
  {
    path: '',
    component: ResultLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultLoadPageRoutingModule {}
