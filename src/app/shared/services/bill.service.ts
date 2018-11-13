import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  public getBill(): Observable<any> {
    return this.http.get(environment.baseUrl + '/bill');
  }

  public postBill(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/bill', data);
  }

  public updateBill(data: any): Observable<any> {
    return this.http.put(environment.baseUrl + '/bill', data);
  }

  public getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(
      `${environment.currencyUrl}&base=${base}&symbols=USD,RUB`,
    );
  }
}
