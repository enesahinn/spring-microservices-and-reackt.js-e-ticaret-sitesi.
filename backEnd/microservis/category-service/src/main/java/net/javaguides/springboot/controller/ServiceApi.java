package net.javaguides.springboot.controller;

        import java.util.List;

        import net.javaguides.springboot.model.Category;
        import net.javaguides.springboot.service.CategoryService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;


@RestController
public class ServiceApi {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getAllCategory(){
        return ResponseEntity.ok().body(categoryService.getAllCategory());
    }

    @PostMapping("/categories/add")
    public ResponseEntity<Category> createProduct(@RequestBody Category category){
        return ResponseEntity.ok().body(this.categoryService.createCategory(category));
    }

    @PutMapping("/categories/update/{id}")
    public ResponseEntity<Category> updateTopCategory(@PathVariable long id, @RequestBody Category category){
        category.setId(id);
        return ResponseEntity.ok().body(this.categoryService.updateCategory(category));
    }

    @DeleteMapping("/categories/delete/{id}")
    public HttpStatus deleteTopCategory(@PathVariable long id){
        this.categoryService.deleteCategory(id);
        return HttpStatus.OK;
    }
}
