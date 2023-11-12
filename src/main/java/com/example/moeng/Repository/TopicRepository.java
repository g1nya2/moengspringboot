package com.example.moeng.Repository;

import com.example.moeng.Entity.Topic;
import org.springframework.data.repository.CrudRepository;

public interface TopicRepository extends CrudRepository<Topic, Long> {
}
