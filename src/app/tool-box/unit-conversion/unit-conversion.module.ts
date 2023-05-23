import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytesComponent } from './bytes/bytes.component';
import { UnitCoversionComponent } from './unit-coversion/unit-coversion.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BytesComponent,
    UnitCoversionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    UnitCoversionComponent
  ]
})
export class UnitConversionModule { }
