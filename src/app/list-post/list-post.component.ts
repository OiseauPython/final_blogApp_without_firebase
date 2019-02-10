import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

	constructor(private postService : PostService, private router: Router) {}

	postSubscription: Subscription;
	post: Post[];

    ngOnInit() {
		//this.post = this.postService.post;
		this.postSubscription = this.postService.postSubject.subscribe(
			(post: Post[]) => {
			  	this.post = post;
			}
		);
		this.postService.emitPostSubject();
	}
	
	onNewPost() {
	    this.router.navigate(['/listPost', 'new']);
	}

	onDeletePost(Post: Post) {
	    this.postService.removePost(Post);
	}

	onViewPost(id: number) {
	    this.router.navigate(['/post/', id]);
	}

	ngOnDestroy() {
	    this.postSubscription.unsubscribe();
	}

}
