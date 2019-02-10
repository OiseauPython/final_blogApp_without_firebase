import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from './models/post.model';
import * as firebase from 'firebase';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
	postSubscription: any;
	
    constructor() {
        // Initialize Firebase
		var config = {
			apiKey: "AIzaSyCDQEX0gU9bfv4jZNDaBGtPtm251PFoC1Y",
			authDomain: "blog-final-2dc73.firebaseapp.com",
			databaseURL: "https://blog-final-2dc73.firebaseio.com",
			projectId: "blog-final-2dc73",
			storageBucket: "blog-final-2dc73.appspot.com",
			messagingSenderId: "673470901989"
		};
		firebase.initializeApp(config);
	}
	
    title = 'blog-with-firebase';
    post: Post[];

    /*ngOnInit() {
        //this.post = this.postService.post;
        this.postSubscription = this.postService.postSubject.subscribe(
            (post: Post[]) => {
                this.post = post;
            }
        );
        this.postService.emitPostSubject();
    }*/
}
