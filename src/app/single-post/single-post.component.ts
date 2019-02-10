import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

	postSubscription: Subscription;
	constructor(private postService : PostService, private route: ActivatedRoute) {}

	post:Post;
	ngOnInit() {
		this.post = new Post('', '','','',0,0);
        const id = this.route.snapshot.params['id'];
        this.postService.getSinglePost(+id).then(
            (post: Post) => {
				this.post = post;
				console.log(this.post);
            }
		);
    }
}
