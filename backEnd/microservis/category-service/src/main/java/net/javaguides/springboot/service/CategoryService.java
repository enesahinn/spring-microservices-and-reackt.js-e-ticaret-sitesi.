
package net.javaguides.springboot.service;

import net.javaguides.springboot.model.Category;

import java.util.List;

public interface CategoryService {

    List<Category> getAllCategory();

    Category createCategory(Category product);

    void deleteCategory(long id);

    Category updateCategory(Category category);

}
