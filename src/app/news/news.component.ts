import {Component, OnInit} from '@angular/core';
import {NewsArticle} from "../_models/newsArticle";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  newsArticles: NewsArticle[];
  currentIndex;
  loadAmount = 5;
  scrollDistance = 1;
  loading = true;

  constructor(private newsService: NewsService) {
    this.currentIndex = Math.ceil(window.screen.availHeight / 100);
  }

  ngOnInit(): void {
    this.newsService.getNews(0, this.currentIndex).then(newsArticles => {
      this.newsArticles = newsArticles;
      this.loading = false;
    });
  }

  onScroll() {
    if (this.currentIndex == this.newsArticles.length && !this.loading) {
      this.loading = true;
      this.newsService.getNews(this.currentIndex, this.currentIndex + this.loadAmount).then(newsArticles => {
        this.newsArticles = this.newsArticles.concat(newsArticles);
        this.currentIndex += this.loadAmount;
        this.loading = false;
      });
    }
  }
}
