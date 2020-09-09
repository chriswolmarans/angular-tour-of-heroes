import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  @HostBinding('class')
  get classes(): string {
    return 'absolute container m-8'; // why absolute??
  }
}

