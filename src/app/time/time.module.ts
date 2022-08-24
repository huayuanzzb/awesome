import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRoutingModule } from './time-routing.module';
import { NowComponent } from './now/now.component';
import { TimeComponent } from './time/time.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
  ]
})
export class TimeModule { }
