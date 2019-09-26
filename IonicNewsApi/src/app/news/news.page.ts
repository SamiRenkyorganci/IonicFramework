import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
data:any;
  constructor( private newsservice:NewsService, private router:Router) { }

  ngOnInit() {
    this.newsservice.getNews('top-headlines?country=tr')
    .subscribe(data => {
      console.log(data);
      this.data = data;
      })



  }
  GoToNewsDetail(article){
    this.newsservice.currentArticle=article;
    this.router.navigate(['/news-detail']);


  }

}
