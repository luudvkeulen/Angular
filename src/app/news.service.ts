import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {NewsArticle} from './_models/newsArticle';

@Injectable()
export class NewsService {

  private newsUrl = "http://localhost:8080/api/news";

  constructor(private http: Http) {
  }

  getNews() {
    return this.http
      .get(this.newsUrl)
      .toPromise()
      .then(response=>response.json() as NewsArticle[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
