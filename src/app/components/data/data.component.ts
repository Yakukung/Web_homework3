import { Component } from '@angular/core';
import MovieData from '../../../assets/movie.json';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Route, Router, RouterModule } from '@angular/router';
import CasterBornToday from '../../../assets/bornToday.json';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatButtonModule,RouterModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  
  movie: any;
  movieList:{id:any,movieName:String,rate:any,detail:any,url:any}[] = MovieData;

  casterBornToday:any;
  casterBornTodayList:{idx:any,movieName:any,casterBName:any,Imgurl:any;}[] = CasterBornToday;

  constructor(private router: Router) {
    console.log(this.movieList);
  }

  redirectToMovie(movieId: any) {
    this.router.navigate(['/movie', movieId]);
  }
  sentIdx(idxTolink: any){
    this.router.navigate(['/born', idxTolink]);
  }

}


