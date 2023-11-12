package com.example.moeng.DTO;

import com.example.moeng.Entity.Topic;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TopicDTO {
    private Long id;
    private String question;
    private String response;

    public Topic toEntity() { return new Topic(id, question, response); }
}
