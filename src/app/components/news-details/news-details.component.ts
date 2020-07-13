import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NewsService } from '../../services/news.service';
import { News } from '../../model/news';



@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})

export class NewsDetailsComponent implements OnInit {
  idNews: string = '';
  currentNews: News;
  news: News[];

  constructor(private route: ActivatedRoute, private router: Router, private newsS: NewsService) { 
    this.route.params.subscribe( current => {this.idNews = current._id;

    });
    this.getIdForParamsUrl();

  }

  /**
   *Method used to show a particular article. It is filter by Id
   */

  getIdForParamsUrl() {

      this.newsS.getLatestNews().subscribe( (bodyNews: News[]) => {
        this.news = bodyNews;
        this.news = this.news.filter(x => x._id.localeCompare(this.idNews) === 0);
        console.log('news' + JSON.stringify(this.news));
        if (this.news.length == 1 ){
          this.currentNews = this.news[0];
        }

    });

  }

  ngOnInit(): void {
  }

}