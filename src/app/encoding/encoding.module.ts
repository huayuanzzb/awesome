import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncodingComponent } from './encoding/encoding.component';
import { Base64Component } from './base64/base64.component';
import { Md5Component } from './md5/md5.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    EncodingComponent,
    Base64Component,
    Md5Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    EncodingComponent
  ]
})
export class EncodingModule { }
