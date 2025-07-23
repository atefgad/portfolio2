const projects = [
  {
    id: "1",
    title: "m2market - Furniture Store | E-commerce web app",
    client: "Frelance",
    category: "React.js",
    img: ["/images/projects/p8/p8-1.webp", "/images/projects/p8/p8-2.webp"],
    keyword: [
      "React.js",
      "Redux-toolkit",
      "Firebase-v9",
      "Framer motion",
      "Reactstrap",
    ],
    liveUrl: "https://m2market.atef-gad.com/",
  },
  {
    id: "2",
    title: "alex - coffee & resturant | mobile app",
    client: "other",
    category: "React.js",
    img: [
      "/images/projects/p5/p5-1.webp",
      "/images/projects/p5/p5-2.webp",
      "/images/projects/p5/p5-3.webp",
    ],
    keyword: [
      "React.js",
      "Html5",
      "Css3",
      "tailwindCss",
      "Redux-toolkit",
      "Framer motion",
    ],
    liveUrl: "https://alex.atef-gad.com/",
  },
  {
    id: "3",
    title: "Foody | POS System Web App For Restaurant",
    client: "upWork client",
    category: "React.js",
    img: [
      "/images/projects/p2/p2-1.webp",
      "/images/projects/p2/p2-2.webp",
      "/images/projects/p2/p2-3.webp",
    ],
    keyword: ["React.js", "Redux", "Bootstrap", "Sass"],
    liveUrl: "https://foody.atef-gad.com/",
  },
  {
    id: "4",
    title: "smarty shop | E-commerce React.js web app",
    client: "upWork client",
    category: "React.js",
    img: [
      "/images/projects/p1/p1-1.webp",
      "/images/projects/p1/p1-2.webp",
      "/images/projects/p1/p1-3.webp",
    ],
    keyword: ["React.js", "Redux", "Bootstrap"],
    liveUrl: "https://shop.atef-gad.com/",
  },
  {
    id: "5",
    title: "City Taxi - Rent a taxi or Limousine",
    client: "upWork",
    category: "WordPress",
    img: [
      "/images/projects/p6/p6-1.webp",
      "/images/projects/p6/p6-2.webp",
      "/images/projects/p6/p6-3.webp",
    ],
    keyword: ["WordPress", "Bootstrap", "Html5", "Css3", "Elementor"],
    liveUrl: "https://citty-taxi.com/",
  },
  {
    id: "6",
    title: "Perfumez - the perfume online shop",
    client: "upWork",
    category: "WordPress",
    img: [
      "/images/projects/p9/p9-1.webp",
      "/images/projects/p9/p9-2.webp",
      "/images/projects/p9/p9-3.webp",
    ],
    keyword: ["WordPress", "Bootstrap", "Html5", "Css3", "Elementor"],
    liveUrl: "https://perfumesz.atef-gad.com/",
  },
  {
    id: "7",
    title: "infinity tours Egypt | travel agency",
    client: "other",
    category: "WordPress",
    img: [
      "/images/projects/p3/p3-1.webp",
      "/images/projects/p3/p3-2.webp",
      "/images/projects/p3/p3-3.webp",
    ],
    keyword: ["WordPress", "Bootstrap", "Html5", "Css3"],
    liveUrl: "https://infinitytoursegypt.com/",
  },
  {
    id: "8",
    title: "alrbye clean | cleaning services agancy",
    client: "other",
    category: "WordPress",
    img: [
      "/images/projects/p4/p4-1.webp",
      "/images/projects/p4/p4-2.webp",
      "/images/projects/p4/p4-3.webp",
    ],
    keyword: ["WordPress", "Bootstrap", "Html5", "Css3"],
    liveUrl: "http://alrbee.atef-gad.com/",
  },
  {
    id: "9",
    title: "Jobz | Bootstrap template",
    client: "Khamsat",
    category: "Bootstrap",
    img: [
      "/images/projects/p7/p7-1.webp",
      "/images/projects/p7/p7-2.webp",
      "/images/projects/p7/p7-3.webp",
    ],
    keyword: ["Bootstrap", "Html5", "Css3"],
    liveUrl: "https://joobz.atef-gad.com/",
  },
];

const menuLinks = [
  {
    path: "/",
    display: "Home",
  },
  // {
  //   path: "/#services",
  //   display: "Services",
  // },
  {
    path: "/projects/all",
    display: "Projects",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const socialLinks = [
  {
    name: "Linkedin",
    icon: "ri-linkedin-line",
    path: "https://www.linkedin.com/in/atefgad/",
  },
  {
    name: "Github",
    icon: "ri-github-line",
    path: "https://github.com/atefgad",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line",
    path: "https://www.instagram.com/",
  },
  {
    path: "https://api.whatsapp.com/send?phone=2001017857849",
    name: "whatsapp",
    icon: "ri-whatsapp-line",
  },
];

export { projects, menuLinks, socialLinks };
