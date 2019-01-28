import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostService {
	
	constructor() {}
	static post: any;
    post = [
		{
			title:'Super Article',
			summary:'blablabla',
			article:'blablabla blablabla blablabla blablabla blablabla',
			loveIt: 0,
			createAt : new Date(),
			author : 'Super Auteur'
		},
		{
			title:'Super Article 2',
			summary:'blablabla',
			article:'blablabla blablabla blablabla blablabla blablabla',
			loveIt: 0,
			createAt : new Date(),
			author : 'cool Auteur'
		},
		{
			title:'Super Article 3',
			summary:'blablabla',
			article:'blablabla blablabla blablabla blablabla blablabla',
			loveIt: 0,
			createAt : new Date(),
			author : 'bien Auteur'
		}
	];
}
