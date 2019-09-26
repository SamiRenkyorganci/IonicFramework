import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
article;
  constructor( private newsService : NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle); 
  }

}
