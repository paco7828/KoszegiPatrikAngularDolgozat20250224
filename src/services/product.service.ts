import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'https://dummyjson.com/products';

  constructor(private httpclient: HttpClient) { }

  getProducts() {
    return this.httpclient.get<ProductResponse>(this.apiUrl);
  }
}