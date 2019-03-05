import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: "localhost:8080/createUser";

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    /* alert('' + "localhost:8080/createUser"); */
    return  this.http.post<User>('http://localhost:8080/createUser', user, httpOptions)      
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   /** Log a UserService message with the MessageService which we need to create before */
   private log(message: string) {
     alert('' + message);
  }
}
