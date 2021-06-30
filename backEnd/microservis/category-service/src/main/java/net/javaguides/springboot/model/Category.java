package net.javaguides.springboot.model;

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
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private long id;

    @NotNull
    @Column(name = "categoryName")
    private String categoryName;


    @NotNull
    @Column(name = "topCategoryId")
    private long topCategoryId;

    @NotNull
    @Column(name = "seoUrl")
    private String seoUrl;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public long getTopCategoryId() {
        return topCategoryId;
    }

    public void setTopCategoryId(long topCategoryId) {
        this.topCategoryId = topCategoryId;
    }

    public String getSeoUrl() {
        return seoUrl;
    }

    public void setSeoUrl(String seoUrl) {
        this.seoUrl = seoUrl;
    }
}
