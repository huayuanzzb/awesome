import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRoutingModule } from './time-routing.module';
import { NowComponent } from './now/now.component';
import { TimeComponent } from './time/time.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    NowComponent,
    TimeComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ]
})
export class TimeModule { }
