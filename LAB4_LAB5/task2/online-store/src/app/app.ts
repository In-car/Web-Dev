import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  categories: Category[] = [];
  selectedProducts: Product[] | null = null;
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts =
      this.productService.getProductsByCategory(categoryId);
  }

  deleteProduct(productId: number) {
  if (this.selectedProducts) {
    this.selectedProducts =
      this.selectedProducts.filter(p => p.id !== productId);
  }
}
}