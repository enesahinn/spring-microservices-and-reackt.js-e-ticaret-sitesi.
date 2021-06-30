package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.modal.Product;

public interface ProductService {
	Product createProduct(Product product);

	Product updateProduct(Product product);

	List<Product> getById(int categoryId);

	List<Product> getAllProduct();

	void deleteProduct(long id);
}
