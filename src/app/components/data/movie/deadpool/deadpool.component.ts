import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import MovieData from '../../../../../assets/movie.json';


@Component({
    selector: 'app-deadpool',
    standalone: true,
    templateUrl: './deadpool.component.html',
    styleUrl: './deadpool.component.scss',
    imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule,]
})
export class DeadpoolComponent {
  Deadpool: { id: any; movieName: string; rate: any;detail:any; url:any;Background:any}[] = MovieData;
}