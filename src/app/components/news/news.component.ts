import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  newsResponse: News[];

  constructor(private newsService: NewsService) { 
    this.getNews();

  }
  /**
   *Method used to show the data in the views (the most 25 recent ccn news about the president Trudeau) 
   */
  getNews() {
    this.newsService.getLatestNews().subscribe((newsres: News[]) => {
      this.newsResponse = newsres;
      console.log(JSON.stringify(newsres));
    });



   }

  ngOnInit(): void {
  }

}
