package net.javaguides.springboot.service;

        import java.util.ArrayList;
        import java.util.List;
        import java.util.Optional;

        import net.javaguides.springboot.exception.ResourceNotFoundException;
        import net.javaguides.springboot.repository.TopCategoryRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        import org.springframework.transaction.annotation.Transactional;

        import net.javaguides.springboot.modal.TopCategory;

@Service
@Transactional
public class TopCategoryServiceImpl implements TopCategoryService {

    @Autowired
    private TopCategoryRepository topCategoryRepository;


    @Override
    public TopCategory createTopCategory(TopCategory topCategory) {
        return topCategoryRepository.save(topCategory);
    }

    @Override
    public TopCategory updateTopCategory(TopCategory topCategory) {
        Optional<TopCategory> productDb = this.topCategoryRepository.findById(topCategory.getId());

        if(productDb.isPresent()) {
            TopCategory topCategoryUpdate = productDb.get();
            topCategoryUpdate.setId(topCategory.getId());
            topCategoryUpdate.setCategoryName(topCategory.getCategoryName());
            topCategoryUpdate.setSeoUrl(topCategory.getSeoUrl());
            topCategoryRepository.save(topCategoryUpdate);
            return topCategoryUpdate;
        }else {
            throw new ResourceNotFoundException("Record not found with id : " + topCategory.getId());
        }
    }

    @Override
    public List<TopCategory> getAllTopCategory() {
        return this.topCategoryRepository.findAll();
    }

    @Override
    public void deleteTopCategory(long topCategoryId) {
        Optional<TopCategory> topCategoryDb = this.topCategoryRepository.findById(topCategoryId);

        if(topCategoryDb.isPresent()) {
            this.topCategoryRepository.delete(topCategoryDb.get());
        }else {
            throw new ResourceNotFoundException("Record not found with id : " + topCategoryId);
        }

    }

}
