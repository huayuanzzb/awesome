import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-random-string',
  templateUrl: './random-string.component.html',
  styleUrls: ['./random-string.component.css']
})
export class RandomStringComponent implements OnInit {

  randomString: string = '';
  count: number = 6;
  upper: boolean = true;
  lower: boolean = true;
  digital: boolean = true;
  special: boolean = false;

  constructor(
    private clipboard: Clipboard,
    private notifier: NotificationService,
  ) { }

  ngOnInit(): void {
  }

  generateAndCopy() {
    let options = [this.upper, this.lower, this.digital, this.special]
    const optionsPool = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i] == true) {
        optionsPool.push(i);
      }
    }
    options.filter(e => e == true);
    if (optionsPool.length > this.count) {
      alert($localize`Length is not enough for all options!`)
    }
    if (optionsPool.length == 0) {
      alert($localize`At least one option must be selected!`)
    }
    const optionsLetterCount: number[] = options.map(e => e == true ? 1 : 0);
    for(let i = 0; i < this.count - optionsPool.length; i++) {
      const index = this.genrateRandomNumber(0, optionsPool.length - 1);
      optionsLetterCount[optionsPool[index]]++;
    }
    let result = '';
    for (let i = 0; i < options.length; i++) {
      if (i == 0) {
        result += this.generateRandomUpperCaseLetter(optionsLetterCount[i]);
      } else if (i == 1) {
        result += this.generateRandomLowerCaseLetter(optionsLetterCount[i]);
      } else if (i == 2) {
        result += this.generateRandomDigitalLetter(optionsLetterCount[i]);
      } else {
        result += this.generateRandomSpecialLetter(optionsLetterCount[i]);
      }
    }
    this.randomString = result.split('').sort(function() { return 0.5 - Math.random(); }).join('');
    this.copy();
  }

  copy() {
    this.clipboard.copy(this.randomString);
    this.notifier.notify($localize`The resulting string has been copied to the clipboard.`)
  }

  private genrateRandomNumber(min: number, max: number): number {
    const min1 = Math.ceil(min);
    const max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1)) + min1; 
  }

  private generateRandomUpperCaseLetter(count: number): string {
    let r = '';
    for (let i = 0; i < count; i++) {
      r += String.fromCharCode(this.genrateRandomNumber(65, 90));
    }
    return r;
  }

  private generateRandomLowerCaseLetter(count: number): string {
    let r = '';
    for (let i = 0; i < count; i++) {
      r += String.fromCharCode(this.genrateRandomNumber(97, 122));
    }
    return r;
  }

  private generateRandomDigitalLetter(count: number): string {
    let r = '';
    for (let i = 0; i < count; i++) {
      r += String.fromCharCode(this.genrateRandomNumber(48, 57));
    }
    return r;
  }

  private generateRandomSpecialLetter(count: number): string {
    let pool = [
      [33, 47],  
      [58, 64], 
      [91, 96], 
      [123, 126]
    ];
    let r = '';
    for (let i = 0; i < count; i++) {
      const poolIndex = this.genrateRandomNumber(0, pool.length - 1);
      r += String.fromCharCode(this.genrateRandomNumber(pool[poolIndex][0], pool[poolIndex][1]));
    }
    return r;
  }

 

}
