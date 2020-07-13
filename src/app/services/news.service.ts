import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 
  constructor(private http: HttpClient) { 
    console.log("News service ready");

  }

  /**
   * Method to return data (ie ccn news) from the get request
   * @param query  is the parameter to send with the uri
   */
  getQuery(query: string) {
    const url = `https://search.api.cnn.io/content?`;

    return this.http.get(url);
  }

  /**
   * Get request which return the most 25 recent news related with the president Trudeau
   */
  getLatestNews() {
    return this.getQuery("q=Trudeau&sort=newest&size=30&category=us,politics,world,opinion,healthfrom").pipe(
      map((data : any) => data['result'])
    );
  }
}
