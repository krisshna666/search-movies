import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServicesService } from 'src/app/@service/movie-services.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-individual-movies',
  templateUrl: './individual-movies.component.html',
  styleUrls: ['./individual-movies.component.scss'],
})
export class IndividualMoviesComponent implements OnInit {
  idDetail: any;
  individualMovieId = localStorage.getItem('movieId');
  individualMovieDetails: any = '';
  constructor(
    private router: Router,
    private loc: Location,
    private movieService: MovieServicesService
  ) {
    /*******While refreshing the state is also revamped, so abandoning this code for now *******/
    // this.idDetail = this.router.getCurrentNavigation()?.extras.state;
    // localStorage.setItem('movieId', this.idDetail?.id);
    this.getIndividualMovies(this.individualMovieId);
  }
  navigateBack() {
    this.loc.back();
  }
  getIndividualMovies(id: any) {
    this.movieService.getIndividualMovies(id).subscribe((res) => {
      (this.individualMovieDetails = res), console.log(res);
    });
  }
  ngOnInit(): void {}
}
