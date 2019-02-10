import { Injectable } from '@angular/core';
import { Post } from '../models/post.model'
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor() {
		this.getPost();
	}
	postSubject = new Subject < Post[] > ();
	post: Post[] = [];

    addPost(post: Post) {
        this.post.push(post);
        this.emitPostSubject();
    }

    emitPostSubject() {
        this.postSubject.next(this.post.slice());
	}
	savePost() {
		firebase.database().ref('/listPost').set(this.post);
	}

	getPost() {
	    firebase.database().ref('/listPost')
	        .on('value', (data: DataSnapshot) => {
	            this.post = data.val() ? data.val() : [];
	            this.emitPostSubject();
	        });
	}

	getSinglePost(id: number) {
	    return new Promise(
	        (resolve, reject) => {
	            firebase.database().ref('/listPost/' + id).once('value').then(
	                (data: DataSnapshot) => {
	                    resolve(data.val());
	                }, (error) => {
	                    reject(error);
	                }
	            );
	        }
	    );
	}

    /*getPostById(id: number) {
        const post = this.post.find(
            (s) => {
                return s.id === id;
            }
        );
        return post;
	}*/
	
	createNewPost(newPost: Post) {
	    this.post.push(newPost);
	    this.savePost();
	    this.emitPostSubject();
	}

	removePost(Post: Post) {
	    const PostIndexToRemove = this.post.findIndex(
	        (PostEl) => {
	            if (PostEl === Post) {
	                return true;
	            }
	        }
	    );
	    this.post.splice(PostIndexToRemove, 1);
	    this.savePost();
	    this.emitPostSubject();
	}
}