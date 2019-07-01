import { Component, OnInit, Input} from '@angular/core';
import { Post} from './post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {


  @Input () postTitle: string;
  @Input () postContent: string;
  postLoveIts: number;
  postDate: Date;

  constructor() {
    this.postLoveIts = 0;
    this.postDate = new Post().dDateCreation;
  }

  ngOnInit() {

  }

  // Method for increase or decrease the number of 'I Like'
  onLoveIt( add: boolean) {
    if (add) { this.postLoveIts ++; } else {
      this.postLoveIts --;
    }
  }

  // Method for decrease the number of 'I Like'
  onDontLoveIt() {
    this.onLoveIt(false);
  }

  // return True if number of hits is positive
  getColor(): boolean {
     if ( this.postLoveIts > 0 ) {
      return true;
     } else {
      return false;
     }
  }
}
