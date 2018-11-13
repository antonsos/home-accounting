import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email): Observable<UserModel> {
    return this.http.get(`${environment.baseUrl}/users?email=${email}`)
      .map((user: any) => (user[0] ? user[0] : undefined));
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post(`${environment.baseUrl}/users`, user)
      .map((response: UserModel) => response);
  }
}
