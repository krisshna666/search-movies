import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './@modules/all-movies/all-movies.component';

const routes: Routes = [
  {
    path: 'movies/get-popular-movies',
    loadChildren: () =>
      import('./@modules/all-movies/all-movies.module').then(
        (m) => m.AllMoviesModule
      ),
  },
  {
    path: 'movies/get-movie-details/:id',
    loadChildren: () =>
      import(
        './@modules/individual-movies/individual-movies/individual-movies.module'
      ).then((m) => m.IndividualMoviesModule),
  },
  {
    path: '',
    redirectTo: 'movies/get-popular-movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
