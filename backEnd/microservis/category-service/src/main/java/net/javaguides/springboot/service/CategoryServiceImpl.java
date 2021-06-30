package net.javaguides.springboot.service;

        import java.util.List;
        import java.util.Optional;

        import net.javaguides.springboot.exception.ResourceNotFoundException;
        import net.javaguides.springboot.model.Category;
        import net.javaguides.springboot.repository.CategoryRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        Optional<Category> categoryDb = this.categoryRepository.findById(category.getId());

        if(categoryDb.isPresent()) {
            Category categoryUpdate = categoryDb.get();
            categoryUpdate.setId(category.getId());
            categoryUpdate.setCategoryName(category.getCategoryName());
            categoryUpdate.setSeoUrl(category.getSeoUrl());
            categoryRepository.save(categoryUpdate);
            return categoryUpdate;
        }else {
            throw new ResourceNotFoundException("Record not found with id : " + category.getId());
        }
    }

    @Override
    public void deleteCategory(long topCategoryId) {
        Optional<Category> topCategoryDb = this.categoryRepository.findById(topCategoryId);

        if(topCategoryDb.isPresent()) {
            this.categoryRepository.delete(topCategoryDb.get());
        }else {
            throw new ResourceNotFoundException("Record not found with id : " + topCategoryId);
        }

    }
}
