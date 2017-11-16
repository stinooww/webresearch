import { Component } from '@angular/core';
import {bootstrap} from  '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id: number;
  public state;

  constructor(){
    this.state = false;
  }
}
