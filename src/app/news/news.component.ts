import {Component, OnInit} from '@angular/core';
import {NewsArticle} from "../_models/newsArticle";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  newsArticles: NewsArticle[];
  currentIndex = 5;
  loadAmount = 3;
  scrollDistance = 1;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getNews(0, 5).then(newsArticles => this.newsArticles = newsArticles);
  }

  onScroll() {
    if (this.currentIndex == this.newsArticles.length) {
      this.newsService.getNews(this.currentIndex, this.currentIndex + this.loadAmount).then(newsArticles => {
        this.newsArticles = this.newsArticles.concat(newsArticles);
        this.currentIndex += this.loadAmount;
      });
    }
  }
}
