import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../model/news';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

 
  constructor(private http: HttpClient) { 
    console.log("News service ready");

  }

  /**
   * Method to return data (the lates 25 ccn news from Trudeau) from the get request
  
   */
  getLatestNews() {
    const url = "https://search.api.cnn.io/content?q=Trudeau&sort=newest&size=25&category=us,politics,world,opinion,healthfrom";

    return this.http.get(url).pipe(
      map((data : any) => data['result'])
    );

  }

  
  }

