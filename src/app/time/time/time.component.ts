import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  now: Date = new Date();
  nowFormat: string = 'yyyy-MM-dd HH:mm:ss';
  epochNow: string = '';
  showMills: boolean = false;

  i18n_showMills: string = $localize`Show Mills`;
  i18n_copyValue: string = $localize`Click to copy`;
  i18n_copied: string = $localize`Copied!`;

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    setInterval(() =>{
      this.now = new Date();
      this.epochNow = (this.now.getTime() + '').slice(0, this.showMills ? Number.MAX_VALUE : -3);
    }, 1)
  }

  copyEpochNow() {
    this.clipboard.copy(this.epochNow);
    this.notification(this.i18n_copied);
  }

  copyDateTime() {
    this.clipboard.copy(formatDate(this.now, this.nowFormat, 'en-US'));
    this.notification(this.i18n_copied);
  }

  switchMills() {
    this.showMills = !this.showMills;
    this.nowFormat = this.showMills ? 'yyyy-MM-dd HH:mm:ss.SSS' : 'yyyy-MM-dd HH:mm:ss';
  }

  notification(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
