const tcList = [
  {
    category: "Sports",
    topic: [
      "Discussing the types of exercises one enjoys and the reasons behind those preferences. Sharing passions for particular physical activities or sports.",
      "Conversations about the positive impacts of regular exercise on health. Discussing how exercise can reduce stress, aid in weight management, improve sleep, and more.",
      "Sharing current exercise routines and goals. Discussing short-term and long-term fitness objectives and plans for motivation.",
      "Sharing experiences with recently tried exercises or sports. Discussing challenges and achievements encountered when trying something new.",
      "Discussing preferred exercise equipment and athletic footwear. Sharing preferences for workout attire and experiences related to specific sports gear.",
      "Conversations about various training methods to enhance fitness. Exchanging information on strengthening specific muscle groups or improving endurance.",
      "Discussing experiences participating in local exercise events or group activities. Sharing stories about camaraderie and support gained from specific exercise communities.",
      "Discussing the social connections made through exercise. Sharing experiences of networking and support within specific exercise communities.",
    ],
  },
  {
    category: "Economics",
    topic: [
      "How do you think about the future of the KOSPI in one or two years?",
      "Which company do you expect to be the world's greatest pioneer in IT Industry?",
      "Can the implementation of a universal basic income contribute to the reinforcement of social safety nets and the reduction of societal inequality?",
      "Engaging in a comprehensive discussion on the economic disparities between developed and developing nations and the role the international community should play in addressing these imbalances.",
      "Delving into a thorough debate regarding the transformations in industries and employment structures brought about by the advent of artificial intelligence and automation.",
      "Initiating a discourse on potential strategies to strike a balance between economic development and environmental conservation.",
      "Exploring the merits and drawbacks of advocating for free trade and the arguments surrounding protectionist policies.",
      "Examining potential measures to address vulnerabilities within the financial system and engaging in a conversation about policies for responding to financial crises.",
    ],
  },
  {
    category: "environment",
    topic: [
      "The ongoing reality of global warming and climate change prompts a critical discussion on effective measures and strategies for addressing and mitigating their impacts.",
      "Engaging in a discourse on the expansion of environmentally friendly renewable energy sources and the simultaneous exploration of pathways to move away from dependency on fossil fuels.",
      "Initiating a debate on solutions to the issue of plastic pollution, exploring responses and environmentally friendly alternatives to mitigate the environmental impact of plastic use.",
      "Delving into the discussion of maintaining a balanced approach between the preservation of natural ecosystems and biodiversity while fostering economic development.",
      "Examining the environmental impacts of rapid urbanization and engaging in a discussion on sustainable urban development practices to address these effects.",
      "Discussing the environmental implications of food production and consumption while considering sustainable agricultural models and practices.",
      "Exploring the importance of forest conservation and concurrently discussing sustainable and economically viable approaches to timber harvesting.",
      "Engaging in a conversation about the effectiveness of national and international environmental policies and regulations, and exploring avenues for improvement.",
      "Delving into the protection of biodiversity and its significance, while discussing the detrimental effects of industrial development on ecosystems and potential conservation strategies.",
      "Exploring the impact of environmental education on individual and societal behavior, and discussing more effective methods for environmental education.",
    ],
  },
  {
    category: "Technology & Artificial Intelligence",
    topic: [
      "Engaging in a discussion on the ethical considerations and safety concerns accompanying the advancements in artificial intelligence, exploring potential measures and responses.",
      "Investigating the impact of increasing automation technologies on employment and deliberating on societal responses to address the resulting changes in the job market.",
      "Delving into the issues of privacy in the digital era and discussing effective policies for digital safety and the protection of personal information.",
      "Exploring the benefits and challenges of collaboration between humans and artificial intelligence in the workplace and beyond.",
      "Discussing the transparency of artificial intelligence algorithms and the ethical considerations surrounding fairness in their operation.",
      "Examining the legal responsibilities and regulatory considerations associated with the evolving field of artificial intelligence.",
      "Deliberating on the applications of artificial intelligence in the field of healthcare and addressing the ethical considerations that arise in such implementations.",
      "Engaging in a discussion about the utilization of artificial intelligence in education and the resulting transformations in the learning experience.",
      "Exploring how artificial intelligence can be harnessed for creative endeavors and artistic expressions, discussing the implications for the fields of creativity and art.",
      "Delving into the ways in which artificial intelligence technologies may exacerbate or alleviate societal inequalities, sparking a discussion on the social implications of AI.",
    ],
  },
  {
    category: "Education",
    topic: [
      "Initiating a comprehensive discourse on the current state and future prospects of digital education in light of the advancements in information technology.",
      "Conducting an in-depth discussion on the advantages and limitations of remote education, particularly underscored by the impact of the COVID-19 pandemic.",
      "Engaging in a thoughtful dialogue regarding the influence of science, technology, engineering, and mathematics (STEM) education on the impending industrial revolution.",
      "Delving into the equity challenges within the current educational system and proposing strategies for fostering more accessible and equitable approaches to education.",
      "Examining the merits of a student-centric education model and navigating the challenges associated with its implementation.",
      "Exploring the significance of global educational collaboration and delving into the impacts of exchange programs among diverse nations.",
      "Unpacking the influence of creativity and arts education on the holistic development of students through a detailed and comprehensive discussion.",
      "Engaging in a nuanced conversation about the integration of technology into education, exploring both the advantages and concerns stemming from this integration.",
      "Delving into the current landscape of gender equality and multicultural education within the realm of education, and addressing the associated challenges.",
      "Initiating an extensive discussion on various methods for assessing and measuring learning outcomes and exploring the resulting shifts in educational policies.",
    ],
  },
  {
    category: "Human Rights",
    topic: [
      "In the debate over the legitimacy of the death penalty, discussions revolve around its legality and whether it constitutes a violation of human rights.",
      "The issue of refugees prompts a discussion on the protection of their human rights and the delicate balance required to harmonize these protections with national borders and security concerns.",
      "Engaging in a discourse on the relationship between social inequality, economic disparities, and human rights, exploring how these factors intersect and influence one another.",
      "Initiating a debate on the protection of the rights of sexual minorities, including homosexuals, bisexuals, and transgender individuals, and the societal acceptance of these communities.",
      "Examining the impact of online privacy and digital surveillance on human rights, discussing the ethical considerations and potential infringements associated with these technologies.",
      "Addressing progress in women's rights and gender equality while discussing persisting challenges and issues that continue to affect women globally.",
      "Delving into the intersection of freedom of the press and expression with human rights, exploring the limitations and ethical considerations surrounding these fundamental liberties.",
      "Discussing the rationale behind the penal system and exploring instances where punitive measures may encroach upon human rights, prompting a critical examination of the justice system.",
      "Engaging in a debate on the protection of the rights of individuals with disabilities and strategies to promote their social participation and inclusion.",
      "Exploring the significance of human rights education and discussing how it can contribute to public policy while considering ways to enhance and improve its implementation.",
    ],
  },
];
const elementLeft = document.querySelector("#leftSectionDown");
const elementCategory = elementLeft.querySelector("#category");
const elementTopic = elementLeft.querySelector("#topic");

function regenerate(event) {
  // alert("tcList Length: " + tcList.length);
  const randomCategoryObject =
    tcList[Math.floor(tcList.length * Math.random())];
  const randomTopicList = randomCategoryObject.topic;
  const randomTopic =
    randomTopicList[Math.floor(randomTopicList.length * Math.random())];
  elementCategory.innerText = "Category: " + randomCategoryObject.category;
  // alert("Selected Category List Length: " + randomTopicList.length);
  elementTopic.innerText = randomTopic;
}
regenerate();
