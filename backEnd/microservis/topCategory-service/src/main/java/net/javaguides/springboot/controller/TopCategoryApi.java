package net.javaguides.springboot.controller;

        import java.util.List;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import net.javaguides.springboot.modal.TopCategory;
        import net.javaguides.springboot.service.TopCategoryService;

@RestController
public class TopCategoryApi {

    @Autowired
    private TopCategoryService topCategoryService;

    @GetMapping("/topcategories")
    public ResponseEntity<List<TopCategory>> getAllTopCategory(){
        return ResponseEntity.ok().body(topCategoryService.getAllTopCategory());
    }

    @PostMapping("/topcategories/add")
    public ResponseEntity<TopCategory> createTopCategory(@RequestBody TopCategory topCategory){
        return ResponseEntity.ok().body(this.topCategoryService.createTopCategory(topCategory));
    }

    @PutMapping("/topcategories/update/{id}")
    public ResponseEntity<TopCategory> updateTopCategory(@PathVariable long id, @RequestBody TopCategory topCategory){
        topCategory.setId(id);
        return ResponseEntity.ok().body(this.topCategoryService.updateTopCategory(topCategory));
    }

    @DeleteMapping("/topcategories/delete/{id}")
    public HttpStatus deleteTopCategory(@PathVariable long id){
        this.topCategoryService.deleteTopCategory(id);
        return HttpStatus.OK;
    }
}
