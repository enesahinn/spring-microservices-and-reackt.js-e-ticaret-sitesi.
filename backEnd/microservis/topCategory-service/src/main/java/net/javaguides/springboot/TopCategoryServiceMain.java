//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package net.javaguides.springboot;

        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;
        import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TopCategoryServiceMain {
    public TopCategoryServiceMain() {
    }

    public static void main(String[] args) {
        SpringApplication.run(TopCategoryServiceMain.class, args);
    }
}
