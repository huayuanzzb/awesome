import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  json1: string = '[{"A": "B"}, {"C": "D"}]';
  json2: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onInputChangeJson1() {
    this.json2 = JSON.stringify(JSON.parse(this.json1), null, 2)
  }

  onInputChangeJson2() {

  }

}
