import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolSetRoutingModule } from './tool-set-routing.module';
import { ToolSetComponent } from './tool-set/tool-set.component';
import { TimeModule } from '../time/time.module';
import { RandomStringModule } from '../random-string/random-string.module';


@NgModule({
  declarations: [
    ToolSetComponent
  ],
  imports: [
    CommonModule,
    ToolSetRoutingModule,
    TimeModule,
    RandomStringModule
  ]
})
export class ToolSetModule { }
