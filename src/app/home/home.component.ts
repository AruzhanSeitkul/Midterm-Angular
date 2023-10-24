import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  text_post: any;
  posts: string[] = [];
  like: boolean = false;

  constructor() {
  }

  postTheText(){
    this.posts.push(this.text_post)
    this.text_post = "";
}


  do_like() {
    this.like = !this.like
  }
}
