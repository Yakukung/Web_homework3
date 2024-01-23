import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeadpoolComponent } from "./deadpool/deadpool.component";
import { InceptionComponent } from "./inception/inception.component";
import { JokerComponent } from "./joker/joker.component";
import { JohnwickComponent } from "./johnwick/johnwick.component";
import { ThematrixComponent } from "./thematrix/thematrix.component";
import { ThelordoftheringsComponent } from "./thelordoftherings/thelordoftherings.component";

@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
    imports: [RouterModule, MatButtonModule, CommonModule, DeadpoolComponent, InceptionComponent, JokerComponent, JohnwickComponent, ThematrixComponent, ThelordoftheringsComponent]
})

export class MovieComponent implements OnInit {

  movieId: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.movieId = params['id'];
    });

  }
  
}