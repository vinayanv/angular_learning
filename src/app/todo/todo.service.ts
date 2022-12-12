import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = "http://localhost:8080";
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/todos/')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(todo: Todo): Observable<any> {
    return this.httpClient.post(this.apiURL + '/todos/', JSON.stringify(todo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/todos/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, todo: Todo): Observable<any> {
    return this.httpClient.put(this.apiURL + '/todos/' + id, JSON.stringify(todo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/todos/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
