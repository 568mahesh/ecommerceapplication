package com.shopez.Ecommerce.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopez.Ecommerce.entity.Cart;
import com.shopez.Ecommerce.entity.Product;
import com.shopez.Ecommerce.repo.CartRepo;
import com.shopez.Ecommerce.repo.ProductRepo;
import com.shopez.Ecommerce.service.CartService;
import com.shopez.Ecommerce.service.ProductService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired ProductRepo productRepo;
    @Autowired CartRepo cartRepo;
    @Autowired ProductService productService;
    @Autowired CartService cartService;

    @GetMapping("/products")
    public List<Product> products(){
        return productService.getAllProducts();
    }

  

    @PostMapping("/cart")
    public Cart addCart(@RequestBody Cart cart){

        Product product = productRepo.findById(cart.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        cart.setProduct(product); // ✅ attach full product

        return cartService.addToCart(cart);
    }
    
    @GetMapping("/cart/{id}")
    public List<Cart> view(@PathVariable Long id){
        return cartRepo.findByUserId(id);
    }

    @PostMapping("/order")
    public Map<String, String> order(){
        Map<String, String> response = new HashMap<>();
        response.put("message", "Order placed successfully");
        return response;
    }
}