import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetsComponent } from './components/tweets/tweets.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';



const routes: Routes = [
  { path: "tweets", component: TweetsComponent },
  { path: "news", component: NewsComponent},
  { path: "newsDetails/:_id", component: NewsDetailsComponent},
  { path: "**", pathMatch: "full", redirectTo: "tweets" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
