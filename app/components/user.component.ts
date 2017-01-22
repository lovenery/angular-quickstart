import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  // moduleId: module.id,
  selector: 'user',
  templateUrl: 'app/components/user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  myObject: myObject;
  myArray: string[];
  showMyArray: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
    this.name = 'QAQ';
    this.myObject = {
      q: 'qaq',
      a: 'aqa'
    }
    this.myArray = ['A', 'B', 'C'];
    this.showMyArray = true;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleMyArray() {
    this.showMyArray = !this.showMyArray;
  }

  addArray(item: string) {
    this.myArray.push(item);
  }

  deleteMyArray(i: number) {
    this.myArray.splice(i, 1);
  }
}

interface myObject {
  q: string;
  a: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
