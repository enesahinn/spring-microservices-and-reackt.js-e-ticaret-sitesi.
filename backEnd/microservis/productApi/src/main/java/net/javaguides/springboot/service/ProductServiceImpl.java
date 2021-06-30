package net.javaguides.springboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.springboot.modal.Product;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{

	
	@Autowired
	private ProductRepository productRepository;
	
	
	@Override
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product) {
		Optional<Product> productDb = this.productRepository.findById(product.getId());
		
		if(productDb.isPresent()) {
			Product productUpdate = productDb.get();
			productUpdate.setId(product.getId());
			productUpdate.setProductName(product.getProductName());
			productUpdate.setUnitPrice(product.getUnitPrice());
			productUpdate.setUnitsInStock(product.getUnitsInStock());
			productUpdate.setCategoryId(product.getCategoryId());
			productUpdate.setUrl(product.getUrl());
			productUpdate.setProductType(product.getProductType());
			productUpdate.setProductExplanation(product.getProductExplanation());
			productRepository.save(productUpdate);
			return productUpdate;
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + product.getId());
		}
	}

	@Override
	public List<Product> getAllProduct() {
		return this.productRepository.findAll();
	}

	@Override
	public List<Product> getById(int categoryId) {
		List<Product> ww = new ArrayList<Product>();
		List<Product> productDb = this.productRepository.findAll();
		for (final Product room : productDb) {
			if(room.getCategoryId() == categoryId){
				ww.add(room);
			}
		}
		return ww;
	}

	@Override
	public void deleteProduct(long productId) {
		Optional<Product> productDb = this.productRepository.findById(productId);
		
		if(productDb.isPresent()) {
			this.productRepository.delete(productDb.get());
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + productId);
		}
		
	}

}
