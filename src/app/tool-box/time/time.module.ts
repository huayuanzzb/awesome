import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeComponent } from './time/time.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CovertComponent } from './covert/covert.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimeComponent,
    CovertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    TimeComponent
  ]
})
export class TimeModule { }
