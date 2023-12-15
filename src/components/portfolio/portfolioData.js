import Image1 from "../../assets/img/portfolio/react.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";


const PortfolioData = [
  {
    id: 1,
    type: "REACT USER API",
    image: Image1,
    tag: ["react"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        language: "React Js, Laravel,HTML,CSS ",
        preview: "www.react.rksumon.com",
        link: "https://react.rksumon.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Ecommerce Ste",
    image: Image2,
    tag: ["laravel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Ecommerce Site",
        client: "felixtech",
        language: "Laravel, Ajax, HTML, CSS",
        preview: "www.shop.deshidoctor.com.bd",
        link: "https://shop.deshidoctor.com.bd/",
      },
    ],
  },
  {
    id: 3,
    type: "Management System",
    image: Image3,
    tag: ["vue"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Meal Management System",
        client: "hostel",
        language: " HTML, CSS, Javascript",
        preview: "www.rksumon.com",
        link: "https://www.rksumon.com",
      },
    ],
  },
  {
    id: 4,
    type: "Inventory System",
    image: Image4,
    tag: ["laravel", "vue"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Shop Inventory Management System",
        client: "Personal",
        language: " Vue js, Laravel, PHP",
        preview: "www.shop.rksumon.com",
        link: "https://www.shop.rksumon.com/",
      },
    ],
  },
  {
    id: 5,
    type: "Website",
    image: Image5,
    tag: ["laravel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "TouchIT",
        client: "Emon",
        language: "PHP, Laravel, HTML, Jquery",
        preview: "www.rksumon.com",
        link: "https://rksumon.com",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: Image2,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.rksumon.com",
        link: "https://www.rksumon.com",
      },
    ],
  },
];

export default PortfolioData;
