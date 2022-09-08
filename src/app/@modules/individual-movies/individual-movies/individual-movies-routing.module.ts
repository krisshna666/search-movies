import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualMoviesComponent } from './individual-movies.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualMoviesRoutingModule {}
