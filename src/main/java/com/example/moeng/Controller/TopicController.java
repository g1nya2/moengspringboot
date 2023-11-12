package com.example.moeng.Controller;

import com.example.moeng.DTO.TopicDTO;
import com.example.moeng.Entity.Topic;
import com.example.moeng.Service.ChatService;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
@Slf4j
@RequestMapping("/moeng/topic")
public class TopicController {
    private final ChatService chatService;
    private final ChatgptService chatgptService;

    @GetMapping("/ask")
    public String topicAsk() { return "/member/show";}

    //chat-gpt 와 간단한 채팅 서비스 소스
    @PostMapping("/request")
    public String topicRequest(TopicDTO topicDTO, Model model) {
        Topic topic = topicDTO.toEntity();
        String response = chatService.getChatResponse(topic.getQuestion());
        model.addAttribute("response", response);
        return "/member/topicShow";
    }
}