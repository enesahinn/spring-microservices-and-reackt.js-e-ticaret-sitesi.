package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CategoryServiceMain {

    public static void main(String[] args) {
        SpringApplication.run(CategoryServiceMain.class, args);
    }
}
