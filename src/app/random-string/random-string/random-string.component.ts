import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-string',
  templateUrl: './random-string.component.html',
  styleUrls: ['./random-string.component.css']
})
export class RandomStringComponent implements OnInit {

  randomString: string = '';
  count: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

  generate() {
    this.randomString = '12345';
  }

}
