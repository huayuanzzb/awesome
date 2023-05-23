import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encoding-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component implements OnInit {

  origin: string | null = null;
  encoded: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChangeOrigin() {
    if (this.origin != null) {
      this.encoded = window.btoa(this.origin);
    } else {
      this.encoded = null;
    }
  }

  onInputChangeEncoded() {
    if (this.encoded != null) {
      this.origin = window.atob(this.encoded);
    } else {
      this.origin = null;
    }
  }

}
