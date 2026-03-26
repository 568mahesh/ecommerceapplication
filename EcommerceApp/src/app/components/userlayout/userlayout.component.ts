import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userlayout',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './userlayout.component.html',
  styleUrl: './userlayout.component.css'
})
export class UserlayoutComponent {
 cartCount: number = 0;

// Example: add to cart
addToCart() {
  this.cartCount++;
}
categories = [
  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { name: 'Groceries', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
  { name: 'MobilePhones', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505' },
  { name: 'Toys', img: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81' },
  { name: 'Gifting', img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a' },
  { name: 'Fashion', img: 'https://images.unsplash.com/photo-1521334884684-d80222895322' },
  { name: 'Footwear', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { name: 'Beauty', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348' },
  { name: 'Home', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
  { name: 'Kids', img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad' },
  { name: 'Sports', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
  { name: 'Books', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794' }
];
}
