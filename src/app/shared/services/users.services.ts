import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable()
export class UsersServices {
  constructor(private http: HttpClient) {}

  getUserByEmail(email): Observable<UserModel[]> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((response: Response) => response)
      .map((user: any) => (user[0] ? user[0] : undefined));
  }
}
