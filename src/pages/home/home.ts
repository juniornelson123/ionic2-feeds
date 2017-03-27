import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http'

import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
	public feeds: Array<string>;
	private url: string = "https://www.reddit.com/new.json"
	private olderPosts: string = "https://www.reddit.com/new.json?after=";
	private paramsUrl: string;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public http: Http) {
		this.fetchContent();	
	}

	fetchContent():void{
		let loading = this.loadingCtrl.create({
			content: "Carregando dados..."
		})
		
		loading.present();

		this.http.get(this.url).map(res => res.json())
			.subscribe(data => {
				this.feeds = data.data.children;
				this.paramsUrl = data.data.after;
				console.log(data.data.after)
				loading.dismiss();
			});

		

	}

	itemSelected(feed){
		alert(feed.data.url)
	}


	doInfinite(infiniteScroll) {
	 
	   	 
	      this.http.get(this.olderPosts + this.paramsUrl).map(res => res.json())
	        .subscribe(data => {
	        
	          this.feeds = this.feeds.concat(data.data.children);
	          
	          infiniteScroll.complete();
	        }); 
	}

	doRefresh(refresher) {
 		this.http.get(this.url).map(res => res.json())
 			.subscribe(data => {
 				this.feeds = data.data.children
 				this.paramsUrl = data.data.after;
 				refresher.complete();
 			})
    
  	}  


}
