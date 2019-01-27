import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private postService : PostService) {}
	title = 'blog-without-firebase';
	posts: any[];

    ngOnInit() {
		this.posts = this.postService.post;
    }
}
