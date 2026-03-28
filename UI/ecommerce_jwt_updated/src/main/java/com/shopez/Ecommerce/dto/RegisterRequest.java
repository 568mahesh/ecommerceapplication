package com.shopez.Ecommerce.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String fullname;
    private String username;
    private String password;
    private String email;
    private String role;
}
