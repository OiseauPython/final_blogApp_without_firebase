import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, } from '@angular/material'
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListPostComponent } from './list-post/list-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
	{ path: 'listPost', component: ListPostComponent },
	{ path: 'post/:id', component: SinglePostComponent },
	{ path: 'new', component: NewPostComponent },
	{ path: '', component: ListPostComponent },
	{ path: 'not-found', component: FourOhFourComponent },
	{ path: '**', redirectTo: 'not-found' }
];


@NgModule({
    declarations: [
        AppComponent,
        ListPostComponent,
        NewPostComponent,
        SinglePostComponent,
		NavComponent,
		FourOhFourComponent
    ],
    imports: [
        BrowserModule,FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
		LayoutModule,
		HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
		MatListModule,
		RouterModule.forRoot(appRoutes)
    ],
    providers: [
		PostService
	],
    bootstrap: [AppComponent]
})
export class AppModule {}
