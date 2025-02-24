import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
    });
  }
}