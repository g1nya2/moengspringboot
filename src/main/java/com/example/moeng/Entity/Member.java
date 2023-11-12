package com.example.moeng.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Columns;

@Entity

@Builder
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id
    private String id;
    private Integer purpose; // 0 장소 제공자, 1 장소 이용자
    private Integer age;
    private Integer gender; // 0 남자, 1 여자
    private String password;
    private String registeredPlaceId; // 객체로 만들어보기
}
