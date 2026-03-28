package com.shopez.Ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopez.Ecommerce.entity.Product;
import com.shopez.Ecommerce.repo.ProductRepo;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    ProductRepo repo;

    @PostMapping("/add")
    public Product add(@RequestBody Product p){
        return repo.save(p);
    }

    @PutMapping("/edit/{id}")
    public Product edit(@PathVariable Long id, @RequestBody Product p){

        Product existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // ✅ ONLY update if value is present
        if(p.getName() != null && !p.getName().isEmpty()){
            existing.setName(p.getName());
        }

        if(p.getDescription() != null && !p.getDescription().isEmpty()){
            existing.setDescription(p.getDescription());
        }

        if(p.getPrice() != 0){
            existing.setPrice(p.getPrice());
        }

        if(p.getCategory() != null && !p.getCategory().isEmpty()){
            existing.setCategory(p.getCategory());
        }

        if(p.getImage() != null && !p.getImage().isEmpty()){
            existing.setImage(p.getImage());
        }

        return repo.save(existing);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
        repo.deleteById(id);
        return "Deleted";
    }

    @GetMapping("/products")
    public List<Product> list(){
        return repo.findAll();
    }
}
