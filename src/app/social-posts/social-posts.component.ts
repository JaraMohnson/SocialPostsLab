import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showForm:boolean = false; 
  posts: Post[] = [
    {
      title: "Pain",
      thought: "Duck"
    },
    {
      title: "little pain",
      thought: "little duck"
    }
  ];

  onSubmit(p:Post):void {
    this.posts.unshift(p)
  }

  toggleForm():void {
    this.showForm = !this.showForm;
  }
}
