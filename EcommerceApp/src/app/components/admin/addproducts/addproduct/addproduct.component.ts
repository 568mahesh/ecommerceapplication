import { Component } from '@angular/core';
import { ProductService } from '../../../../services/products/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
 product = {
    name: '',
    description: '',
    price: 0,
    category: ''
  };
  imageFile!: File;

  constructor(private productService: ProductService, private router: Router) {}

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  submit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('category', this.product.category);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    this.productService.addProduct(formData).subscribe({
      next: (res:any) => {
        alert('Product added successfully');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err:any) => {
        console.error(err);
        alert('Failed to add product');
      }
    });
  }
}
