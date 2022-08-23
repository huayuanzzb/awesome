import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-time-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {

  now: Date = new Date();
  nowFormat: string = 'yyyy-MM-dd HH:mm:ss';
  epochNow: number = 0;
  showMills: boolean = false;

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    setInterval(() =>{
      this.now = new Date();
      this.epochNow = this.now.getTime();
    }, 1)
  }

  copyEpochNow() {
    this.clipboard.copy(this.epochNow.toString());
    this.notification("Epoch has been copied!");
  }

  switchMills() {
    this.showMills = !this.showMills;
    this.nowFormat = this.showMills ? 'yyyy-MM-dd HH:mm:ss.SSS' : 'yyyy-MM-dd HH:mm:ss';
  }

  notification(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      // here specify the position
      verticalPosition: 'top'
    });
  }

}
