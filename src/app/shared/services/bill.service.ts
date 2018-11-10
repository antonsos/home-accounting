import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BillModel} from '../models/bill.model';
import {Observable} from 'rxjs';

Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<any> {
    return this.http.get(environment.billUrl)
      .map((res: Response) => res.json());
  }

  getCurrency() {
    return this.http.get('http://data.fixer.io/api/latest?access_key=1b3f18de90718e4c530041928d012f1b&base=GBPUpgradetoBasicPlansymbols=USD,AUD,CAD,PLN,MXN')
      .map((res: Response) => res.json());
  }
}
