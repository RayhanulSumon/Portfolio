import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "How to overcome the difficulty",
      commentor: "Rayhanul Sumon ",
      date: "21 March 2022",
      tag: `Mental health, Change Management`,
      description1:
        "Life is difficult, indeed. Nothing is easy to earn, why I am alone? why this is only with me?! this kind of thinking takes the presidency in our mind. Most of the time we are just acting like let it go rather than not thinking about what should be done? .",
      description2:
        "Consider yourself; why I am just me not someone else? because you are unique to this world and yes often time you failed to realize that!. ",
      description3:
        "why I am alone? You are not alone you have many things in your memory, you can make things interesting, you can love someone, you can make the change, you can be an artist, everything you can do so why do you think you are alone; you have many characters with your kingdom.",
      link: "https://www.researchgate.net/publication/359203109_How_to_overcome_the_difficulty",

    },
    {
      id: 2,
      img: img2,
      title: "Change management strategy to manage change in the education sector",
      commentor: "Rayhanul Sumon  ",
      date: "Aug 2021",
      tag: `Change Management, `,
      description1:
        "Change is constant, everyday change happened in person, organization, culture.",
      description2:
        "If you do not change direction, you may end up where you are heading. – Lao Tzu . ",
      description3:
        "2   Introduction: Change is constant, everyday change happened in person, organization, culture. But becoming change is not simple, we fear to change. The educational sector, just like any other organization changes regularly. During COVID 19 situation change happened in each sector especially in the education sector, because of this problem we implement online classes and activities. This is change, it happens all the time. But change doesn’t bring improvement. It depends on how well this change is implemented in the sector. Unplanned changes often lead to destruction. So, to initiate the proper effective change we have to apply a strategic approach. ",
      link: "https://www.researchgate.net/publication/359244275_Change_management_strategy_to_manage_change_in_the_education_sector",
    },
    {
      id: 3,
      img: img3,
      title: "How to Be a Successful Entrepreneur",
      commentor: "steve ",
      date: "9 January 2020",
      tag: `wordpress, business, economy, design`,
      description1:
        "Often time people find a good idea to start up their business. But most of the time they never find any best idea. This is why most of the startup businesses fall because the market does not accept that idea. So rather than finding the best idea, we should try to find the solution for the existing problem. If we find an innovative solution fo.",
      description2:
        "Finding a proper solution is no easy task, it requires some fundamentals. Such as- Know your Skill & Ability: First thing you should acknowledge is your potential skills and ability. Because no matter how great an idea is you could not fulfillment that idea unless you have related skill and some particular ability. So, you should focus on your skill and then. ",
      description3:
        "If we tried to think of a good idea, we wouldn't have been able to think of a good idea. You just have to find the solution for a problem in your own life.\" – Brian Chesky ",
      link: "https://www.researchgate.net/publication/354128515_How_to_Be_a_Successful_Entrepreneur",

    },

  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
