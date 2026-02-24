import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  likes = 0;

  like() {
    this.likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  share() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }
}