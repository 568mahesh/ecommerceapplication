import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'http://localhost:8082/admin';

  constructor(private http: HttpClient) {}

  addProduct(formData: FormData): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/product`, formData);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}