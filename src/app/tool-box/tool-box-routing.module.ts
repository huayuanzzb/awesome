import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'set',
    pathMatch: 'full'
  },
  {
    path: 'set', 
    loadChildren: () => import('../tool-set/tool-set.module').then(m => m.ToolSetModule)
  },
  {
    path: 'json',
    loadChildren: () => import('../json/json.module').then(m => m.JsonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolBoxRoutingModule { }
