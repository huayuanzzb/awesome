import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolSetComponent } from './tool-set/tool-set.component';

const routes: Routes = [
  {
    path: '', component: ToolSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolSetRoutingModule { }
