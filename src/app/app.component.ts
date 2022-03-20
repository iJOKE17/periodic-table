import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'periodic';
  name: string = '';
  setName(name: string) {
    this.name = name;
  }
}
