# --- Build stage ---
FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

# Copy source code
COPY pom.xml .
COPY src ./src
# Build ứng dụng
RUN mvn -q clean package -DskipTests

# --- Run stage ---
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy file jar từ stage build
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
