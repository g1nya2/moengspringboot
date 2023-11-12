package com.example.moeng.DTO;

import com.example.moeng.Entity.Member;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class MemberDTO {
    private String id;
    private Integer purpose;
    private Integer age;
    private Integer gender;
    private String password;
    private String registeredPlaceId;

    public Member toEntity() {
        return new Member(id, purpose, age, gender, password, registeredPlaceId);
    }
}
