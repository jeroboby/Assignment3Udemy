import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        .number {
            color: white;
        }
    `]
})
export class AppComponent {
  buttonClick: boolean = false;
  buttonNumber: number = 0;
  arrayClick = [];

  buttonClickStatus() {
    this.buttonClick = true;
    this.buttonNumber += 1;
    this.arrayClick = [this.buttonNumber];
  }

  getColor() {
    return this.buttonNumber >=5 ? 'blue' : 'white';
}
}
