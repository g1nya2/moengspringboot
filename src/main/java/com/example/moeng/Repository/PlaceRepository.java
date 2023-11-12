package com.example.moeng.Repository;

import com.example.moeng.Entity.Place;
import org.springframework.data.repository.CrudRepository;

public interface PlaceRepository extends CrudRepository<Place, String> {
}
