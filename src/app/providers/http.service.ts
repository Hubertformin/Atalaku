import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // http options
  httpOptions = new HttpHeaders(
    {
      // 'Access-Control-Request-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      'Content-Type':  'application/json',
      'Authorization': 'web-atalaku-cms'
    }
  );
  constructor(private http: HttpClient) {}
  // get baserUrl
  private static get baseUrl() {
    return 'http://localhost:5000';
  }
  // get authorization token
  private static get autorizationToken() {
    return 'web-atalaku-cm';
  }
  // get user
  getUserByEmail(email: string) {
    return this.http.get(`${HttpService.baseUrl}/users/email/${email}`, {headers: this.httpOptions, params: {['offset']: '2', ['limit']: '2'}})
  }
  // get all users
  getAllUsers() {
    return this.http.get(`${HttpService.baseUrl}/users`, {headers: this.httpOptions})
      .pipe(
        catchError(this.handleError)
      );
  }
  // get all music
  getAllMusic() {
    return this.http.get(`${HttpService.baseUrl}/music`, {headers: new HttpHeaders().set('Authorization', 'web-atalaku-cm')})
      .pipe(
        retry(3), // retry to get if request failed!
        catchError(this.handleError)
      );
  }
  // get all music videos
  getAllMusicVideos() {
    return this.http.get(`${HttpService.baseUrl}/music-videos`);
  }
  // get specific music video
  getMusicvideo(id) {
    return this.http.get(`${HttpService.baseUrl}/music-videos/${id}`);
  }
  // album
  getAlbums() {
    return this.http.get(`${HttpService.baseUrl}/albums`);
  }
  // get specific album
  getAlbum(id) {
    return this.http.get(`${HttpService.baseUrl}/albums/${id}`);
  }
  // get all movies
  getAllMovies() {
    return this.http.get(`${HttpService.baseUrl}/movies`);
  }
  // get movie
  getMovie(id) {
    return this.http.get(`${HttpService.baseUrl}/movies/${id}`);
  }
  // update user
  updateUser(id, data) {
    return this.http.put(`${HttpService.baseUrl}/users/${id}`, data, {headers: this.httpOptions});
  }
  // get administrator
  getAdmins() {
    return this.http.get(`${HttpService.baseUrl}/admins`);
  }
  getAdminByName(username: string) {
    return this.http.get(`${HttpService.baseUrl}/admins/username/${username}`);
  }
  // create administrator
  createAdmin(data) {
    return this.http.post(`${HttpService.baseUrl}/admins`, data, {headers: this.httpOptions});
  }
  // update admin
  updateAdmin(data) {
    return this.http.put(`${HttpService.baseUrl}/admins/${data.id}`, data, {headers: this.httpOptions});
  }
  // delete stass
  deleteStaff(id) {
    return this.http.delete(`${HttpService.baseUrl}/admins/${id}`, {headers: this.httpOptions});
  }
  /**
   * @methods Music methods
   * */
  addMusic(data) {
    return this.http.post(`${HttpService.baseUrl}/music`, data, {headers: this.httpOptions});
  }
  addMusicVideo(data) {
    return this.http.post(`${HttpService.baseUrl}/music-videos`, data, {headers: this.httpOptions});
  }
  /**
   * @methods Genre methods
   * */
  createGenre(data) {
    data.name = data.name[0].toUpperCase() + data.name.slice(1).toLowerCase();
    return this.http.post(`${HttpService.baseUrl}/genres`, data, {headers: this.httpOptions});
  }
  // get genre
  getAllGenres() {
    return this.http.get(`${HttpService.baseUrl}/genres`);
  }
  getGenresByType(type) {
    return this.http.get(`${HttpService.baseUrl}/genres/type/${type}`);
  }
  // update genre
  updateGenre(data) {
    return this.http.put(`${HttpService.baseUrl}/genres/${data.id}`, data, {headers: this.httpOptions});
  }
  deleteGenre(id) {
    return this.http.delete(`${HttpService.baseUrl}/genres/${id}`, {headers: this.httpOptions});
  }
  /**
   * @method handleError
   * @summary handle all http clients errors!
   * */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
