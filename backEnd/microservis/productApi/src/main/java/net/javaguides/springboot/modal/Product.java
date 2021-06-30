package net.javaguides.springboot.modal;

import com.sun.istack.NotNull;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private long id;

	@NotNull
	@Column(name = "productName")
	private String productName;

	@NotNull
	@Column(name = "url")
	private String url;

	@NotNull
	@Column(name = "unitPrice")
	private BigDecimal unitPrice;

	@NotNull
	@Column(name = "unitsInStock")
	private String unitsInStock;

	@NotNull
	@Column(name = "categoryId")
	private int categoryId;

	@NotNull
	@Column(name = "productType")
	private String productType;

	@NotNull
	@Column(name = "productExplanation")
	private String productExplanation;

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public String getProductExplanation() {
		return productExplanation;
	}

	public void setProductExplanation(String productExplanation) {
		this.productExplanation = productExplanation;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public BigDecimal getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getUnitsInStock() {
		return unitsInStock;
	}

	public void setUnitsInStock(String unitsInStock) {
		this.unitsInStock = unitsInStock;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}





}
