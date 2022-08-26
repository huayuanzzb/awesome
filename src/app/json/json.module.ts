import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonRoutingModule } from './json-routing.module';
import { JsonComponent } from './json/json.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    JsonComponent
  ],
  imports: [
    CommonModule,
    JsonRoutingModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HighlightModule,
  ]
})
export class JsonModule { }
