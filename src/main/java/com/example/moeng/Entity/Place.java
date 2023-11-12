package com.example.moeng.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity

@Builder
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Place {
    @Id
    private String name;
    private String address;
    private Integer capacity;
    private String timezone;
    private Integer minimum;
    private String ownerName;
}
