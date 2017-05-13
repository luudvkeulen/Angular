import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {NewsArticle} from './_models/newsArticle';

@Injectable()
export class NewsService {

  private newsUrl = "http://192.168.1.234:8080/api/news";

  constructor(private http: Http) {
  }

  getNews(begin, end) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('begin', begin);
    params.set('end', end);

    return this.http
      .get(this.newsUrl, {search: params})
      .toPromise()
      .then(response=>response.json() as NewsArticle[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
