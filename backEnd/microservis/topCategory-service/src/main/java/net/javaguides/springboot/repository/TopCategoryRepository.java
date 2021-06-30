package net.javaguides.springboot.repository;

        import org.springframework.data.jpa.repository.JpaRepository;

        import net.javaguides.springboot.modal.TopCategory;

public interface TopCategoryRepository extends JpaRepository<TopCategory, Long> {

}
