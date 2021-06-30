package com.haydikodlayalim;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fb")
public class HystrixController {

    @GetMapping("/products")
    public String productFallback(){
        return "Account Service is not available.";
    }

    @GetMapping("/categories/{categoryId}")
    public String productByCategoryFallback(){
        return "Ticket Service is not available.";
    }

    @GetMapping("/topcategories")
    public String topCategoryFallback(){
        return "Account Service is not available.";
    }

}
