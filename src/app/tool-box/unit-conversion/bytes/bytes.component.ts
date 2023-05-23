import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-coversion-bytes',
  templateUrl: './bytes.component.html',
  styleUrls: ['./bytes.component.css']
})
export class BytesComponent implements OnInit {

  all = ['KB', 'MB', 'GB', 'TB'];
  values: (number | null)[] = this.all.map(e => null);
  r: number = 1024;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(index: number) {
    const base = this.values[index];
    for (let i = 0; i < this.values.length; i++) {
      if (i != index) {
        if (base == null || base < 0) {
          this.values[i] = null;
        } else {
          const rate = i > index ? (1/this.r) : this.r 
          this.values[i] = base * Math.pow(rate, Math.abs(index - i));
        }
      }
    }
  }

}
