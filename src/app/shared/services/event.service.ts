import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventModel} from '../models/event.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  addEvent(categoryEvent: EventModel): Observable<any> {
    return this.http.post(`${environment.baseUrl}/events`, categoryEvent);
  }

  getEvents(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/events`);
  }
}
