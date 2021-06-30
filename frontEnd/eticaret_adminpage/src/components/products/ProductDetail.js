import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün Adı"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Ürün Kategorisi"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Ürün Fiyatı"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="unitsInStock"
        label="Stok"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <TextInput
        name="url"
        label="Dosya adını uzantısıyla giriniz."
        value={product.url}
        onChange={onChange}
        error={errors.url}
      />

      <TextInput
        name="productType"
        label="Ürün Tipi."
        value={product.productType}
        onChange={onChange}
        error={errors.productType}
      />

      <TextInput
        name="productExplanation"
        label="Ürün Açıklaması."
        value={product.productExplanation}
        onChange={onChange}
        error={errors.productExplanation}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
