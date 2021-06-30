package net.javaguides.springboot.service;

        import java.util.List;

        import net.javaguides.springboot.modal.TopCategory;

public interface TopCategoryService {
    TopCategory createTopCategory(TopCategory topCategory);

    TopCategory updateTopCategory(TopCategory topCategory);

    List<TopCategory> getAllTopCategory();

    void deleteTopCategory(long id);
}
