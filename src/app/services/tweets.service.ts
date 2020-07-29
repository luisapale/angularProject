import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweets } from '../model/tweets';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class TweetsService {

  constructor(private http: HttpClient) { 
    console.log("Tweet service ready");
    
  }

/**
 * Method to return data (i.e. tweets) from the get request
 * @param query  is the parameter to send with the uri
 */

getQuery(query: string) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?${query}`;

  const headers = new HttpHeaders({
    Authorization:
    /*here the bearer auth*/
  });

  return this.http.get(url, { headers });
}

/**  
 * Get request which return 25 tweets classified by ID
 */
getLatestTweets() {
  return this.getQuery("user_id=14260960&size=25&exclude_replies=true").pipe(
    map((data: Tweets[]) => data)
  );
}


}
