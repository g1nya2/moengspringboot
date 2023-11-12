package com.example.moeng.DTO;

import com.example.moeng.Entity.Place;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class PlaceDTO {
    private String name;
    private String address;
    private Integer capacity;
    private String timezone;
    private Integer minimum;
    private String ownerName;

    public Place toEntity() { return new Place(name, address, capacity, timezone, minimum, ownerName);}
}
