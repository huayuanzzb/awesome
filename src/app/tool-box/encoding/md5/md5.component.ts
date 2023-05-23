import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-encoding-md5',
  templateUrl: './md5.component.html',
  styleUrls: ['./md5.component.css']
})
export class Md5Component implements OnInit {

  origin: string | null = null;
  encoded: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChangeOrigin() {
    if (this.origin != null) {
      this.encoded = "TODO: need to be implement.";
    } else {
      this.encoded = null;
    }
  }

}
