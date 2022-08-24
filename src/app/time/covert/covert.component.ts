import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-covert',
  templateUrl: './covert.component.html',
  styleUrls: ['./covert.component.css']
})
export class CovertComponent implements OnInit {

  dateTime: string = '';
  epoch: string = '';

  private delay = 100;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChangeEpoch() {
    setTimeout(() => {
      this.dateTime = '';
      this.dateTime = this.covertToDateTime(Number(this.epoch));
    }, this.delay);
  }

  onInputChangeDateTime() {
    setTimeout(() => {
      this.epoch = '';
      this.epoch = String(this.covertToEpoch(this.dateTime));
    }, this.delay);
  }

  private covertToDateTime(n: number): string {
    return new Date(n).toString();
  }

  private covertToEpoch(s: string): number {
    return (new Date(s)).getTime();
  }

  private guessFormat(s: string): string {
    return 'yyyy-MM-dd';
  }

}
