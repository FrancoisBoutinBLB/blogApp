import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Init of the content of blog posts
  aInitData = [
    {
      title: 'Title of the first post',
      content: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      title: 'Title of the second post',
      content: ' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',

    },
    {
      title: 'Title of the third post',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',

    }
  ];


}
