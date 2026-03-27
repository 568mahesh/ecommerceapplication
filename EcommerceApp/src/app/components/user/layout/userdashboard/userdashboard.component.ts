import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/products/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  cartCount: number = 0;

  products: any[] = [];        // ✅ all products
  filteredProducts: any[] = []; // ✅ for search/filter
  searchText: string = '';

  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }


  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.filteredProducts = res; // initial load
      },
      error: (err:any) => console.error(err)
    });
  }

  // 🔍 Search
  searchProduct() {
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 🏷️ Category filter
  filterCategory(category: string) {
    this.filteredProducts = this.products.filter(p =>
      p.category === category
    );
  }

  // 🛒 Add to cart
  addToCart(product: any) {
    this.cartCount++;
    console.log("Added:", product);
  }

  categories = [
    { name: 'Electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { name: 'Groceries', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
    { name: 'MobilePhones', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505' },
    { name: 'Toys', img: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81' },
    { name: 'Fashion', img: 'https://images.unsplash.com/photo-1521334884684-d80222895322' },
     { name: 'Electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { name: 'Groceries', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
    { name: 'MobilePhones', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505' },
    { name: 'Toys', img: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81' },
    { name: 'Fashion', img: 'https://images.unsplash.com/photo-1521334884684-d80222895322' },
     { name: 'Electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { name: 'Groceries', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
    { name: 'MobilePhones', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505' },
    { name: 'Toys', img: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81' },
    { name: 'Fashion', img: 'https://images.unsplash.com/photo-1521334884684-d80222895322' }
  ];
}