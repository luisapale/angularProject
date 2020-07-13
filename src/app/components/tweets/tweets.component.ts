import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import { Tweets } from '../../model/tweets';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweetsResponse: Tweets[];

  constructor(private servicio: TweetsService) {
    this.getTweets();
   }


   /**
 *Method used to show the data in the views (the most 25 recent tweets teewt ot re tweet by president Trudeau) 
*/

   getTweets() {
    this.servicio.getLatestTweets().subscribe((res: Tweets[]) => {
      this.tweetsResponse = res;
      console.log(JSON.stringify(res));
    });
  }



  ngOnInit(): void {
  }




}
