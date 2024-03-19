import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { Blog } from './Blog';
import { NavigationComponent } from "./components/navigation/navigation.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatButtonModule, HomeComponent, NavigationComponent]
})
export class AppComponent {
  title = '00012882_app';

  blog:Blog[] = [
    {
      "postID": 1,
      "userID": 2,
      "title": "hello",
      "content": "saidka krasava",
      "postDate": "March 2nd, Tuesday",
      "user": {
        "userID": 2,
        "username": "saidka",
        "email": "saidka@saidka.com",
        "createDate": "March 3rd Wednesday"
      }
    },

    {
      "postID": 2,
      "userID": 3,
      "title": "salam",
      "content": "elish ne krasava",
      "postDate": "March 4th, Thursday",
      "user": {
        "userID": 3,
        "username": "elish",
        "email": "elish@elish.com",
        "createDate": "March 5th Friday"
      }
    }]
}
