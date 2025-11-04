# FloginFE_BE
Assignment "Kiểm Thử Phần Mềm" (Ứng dụng Login &amp; Product Management)

FloginFE_BE/
│
├── frontend/           ← React App (Login + Product)
│   ├── src/
│   │   ├── components/  ← Login, ProductForm, ProductList, ProductDetail
│   │   ├── services/    ← authService.js, productService.js
│   │   ├── utils/       ← validation.js, productValidation.js
│   │   ├── tests/       ← *.test.js files (unit, integration, mock)
│   │   └── App.js
│   ├── package.json
│   └── jest.config.js
│
└── backend/            ← Spring Boot API (Auth + Product)
    ├── src/
    │   ├── main/java/com/flogin/
    │   │   ├── controller/  ← AuthController.java, ProductController.java
    │   │   ├── service/     ← AuthService.java, ProductService.java
    │   │   ├── entity/      ← User.java, Product.java
    │   │   ├── repository/  ← ProductRepository.java
    │   │   └── dto/         ← LoginRequest.java, ProductDto.java
    │   └── test/java/       ← Unit, Integration, Mock tests
    └── pom.xml

