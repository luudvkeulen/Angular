import { Component, OnInit } from '@angular/core';
import {NewsArticle} from "../_models/newsArticle";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  newsArticles: NewsArticle[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().then(newsArticles => this.newsArticles = newsArticles);
  }

}
