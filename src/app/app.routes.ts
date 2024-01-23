import { Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { MovieComponent } from './components/data/movie/movie.component';
import { BornComponent } from './components/data/born/born.component';

export const routes: Routes = [
    {path:'',component:DataComponent},
    {path: 'movie/:id', component: MovieComponent },
    {path: 'born/:idx', component: BornComponent },
];
