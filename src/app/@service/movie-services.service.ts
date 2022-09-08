import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieServicesService {
  constructor(private http: HttpClient) {}
  getAllMovies(params: any) {
    return this.http
      .get('https://api.themoviedb.org/3/movie/popular?language=en-US', {
        params: params,
      })
      .pipe(
        map((res) => res),
        catchError((err) => throwError(err))
      );
  }
  searchMovies(params: any) {
    return this.http
      .get(
        'https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false',
        { params: params }
      )
      .pipe(timeout(5000));
  }
  getIndividualMovies(id: any) {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
      .pipe(
        map((res) => res),
        catchError((err) => throwError(err))
      );
  }
}
