import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiComponent } from './wiki.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WikiComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTreeModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    WikiRoutingModule
  ]
})
export class WikiModule { }
