import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encoding',
  templateUrl: './encoding.component.html',
  styleUrls: ['./encoding.component.css']
})
export class EncodingComponent implements OnInit {

  all: string[] = ['base64', 'md5']
  current: string = this.all[0];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeType(type: string) {
    this.current = type;
  }

}
