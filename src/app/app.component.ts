import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Hello I am a App Component';
  changeTitle(){
    this.title = 'Hello I am Card Component';
  }
}
