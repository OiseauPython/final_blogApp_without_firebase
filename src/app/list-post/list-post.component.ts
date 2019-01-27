import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

	constructor(private postService : PostService) {}
	
	post: any[];

    ngOnInit() {
		this.post = this.postService.post;
    }

}
