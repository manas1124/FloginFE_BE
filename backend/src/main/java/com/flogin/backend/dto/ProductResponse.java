package com.flogin.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResponse {
    private Long id;
    private String name;
    private Long price;
    private Integer quantity;
    private String description;
    private String category;
    private Boolean active;
}
