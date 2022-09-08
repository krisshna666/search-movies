import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieServicesService } from 'src/app/@service/movie-services.service';
import { Router } from '@angular/router';
import {
  NzSkeletonAvatarShape,
  NzSkeletonAvatarSize,
  NzSkeletonButtonShape,
  NzSkeletonButtonSize,
  NzSkeletonInputSize,
} from 'ng-zorro-antd/skeleton';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  filterForm!: FormGroup;
  moviesList: any;
  searchMoviesQuery = '';
  individualMovies: any;
  constructor(
    private movieService: MovieServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createFilterForm();
    this.getAllMovies(this.filterForm.value);
  }
  searchMovies() {
    if (this.searchMoviesQuery == '') {
      this.getAllMovies(this.filterForm.value);
    } else {
      this.moviesList.result = [];
      setTimeout(() => {
        let params = new HttpParams();
        params = params.append('query', this.searchMoviesQuery);
        this.movieService
          .searchMovies(params)
          .subscribe((res) => (this.moviesList = res));
      }, 2000);
    }
  }
  getMoviesIndividually(movie_id: any) {
    /*******State is dissolved once the hard reload sets in, so not an ideal go *******/
    // this.router.navigateByUrl('/get-movie-details', {
    //   state: { id: movie_id },
    // });
    localStorage.setItem('movieId', movie_id);
    this.router.navigateByUrl(`movies/get-movie-details/${movie_id}`);
  }
  getAllMovies(info: any) {
    let params = new HttpParams();
    params = params.append('page', (info && info.page) || 0);

    this.movieService.getAllMovies(params).subscribe((res: any) => {
      (this.moviesList = res),
        this.filterForm.patchValue({
          page: res.page || 1,

          total: 500 || 0,
        });
    });
  }
  pageChange(page: any) {
    let request = this.filterForm.value;
    request['page'] = page || 1;

    this.getAllMovies(request);
  }
  createFilterForm() {
    this.filterForm = this.fb.group({
      page: 1,

      total: 0,
    });
  }
}
