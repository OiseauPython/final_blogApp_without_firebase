import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


    postForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private PostService: PostService,
        private router: Router) {}
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            summary: ['', Validators.required],
            article: ['', Validators.required],
            author: ['', Validators.required],
        });
    }

    onSavePost() {
        const title = this.postForm.get('title').value;
		const summary = this.postForm.get('summary').value;
        const article = this.postForm.get('article').value;
		const author = this.postForm.get('author').value;
		const loveIt = 0;
		const createAt = Date.now();
        const newPost = new Post(title, summary, article, author, loveIt, createAt);
        this.PostService.createNewPost(newPost);
        this.router.navigate(['/listPost']);
    }
}
