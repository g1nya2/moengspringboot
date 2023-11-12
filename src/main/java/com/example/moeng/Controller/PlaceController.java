package com.example.moeng.Controller;

import com.example.moeng.DTO.PlaceDTO;
import com.example.moeng.Entity.Member;
import com.example.moeng.Entity.Place;
import com.example.moeng.Repository.MemberRepository;
import com.example.moeng.Repository.PlaceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/moeng/place")
public class PlaceController {
    @Autowired
    PlaceRepository placeRepository;
    MemberRepository memberRepository;
    @PostMapping("")
    public String placeRegister(PlaceDTO placeDTO) {
        Place place = placeDTO.toEntity();
        Member owner = memberRepository.findById(place.getOwnerName()).orElse(null);
        owner.setRegisteredPlaceId(place.getName());
        memberRepository.save(owner);

        placeRepository.save(place);

        return "/place/createAfter";
    }
}
