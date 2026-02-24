import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = input.required<Product[]>();
  delete = output<number>();

  removeProduct(productId: number) {
    this.delete.emit(productId);
  }
}