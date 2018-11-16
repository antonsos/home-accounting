import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../models/category.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(data: CategoryModel): Observable<any> {
    return this.http.post(`${environment.baseUrl}/categories`, data);
  }

  editCategory(data: CategoryModel): Observable<any> {
    return this.http.put(`${environment.baseUrl}/categories/${data.id}`, data);
  }

  getCategory(id: number) {
    return this.http.get(`${environment.baseUrl}/categories/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/categories`);
  }
}
