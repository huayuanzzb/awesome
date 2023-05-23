import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'toolbox',
    pathMatch: 'full'
  },
  {
    path: 'wiki', 
    loadChildren: () => import('./wiki/wiki.module').then(m => m.WikiModule)
  },
  {
    path: 'toolbox', 
    loadChildren: () => import('./tool-box/tool-box.module').then(m => m.ToolBoxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
