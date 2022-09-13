import { Container, Row } from "reactstrap";
import { ProjectCard } from "../../components";

import classes from "../../components/uiComponents/TopProjects/Top.module.css";

import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
  exit: { opacity: 0, y: 0 },
};

const Projects = ({ projects }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      className={`${classes.top3}`}
      id="projects"
    >
      <Container fluid>
        <div className="d-flex justify-content-around flex-column align-items-center">
          <h5 className="sub__title">My Portfolio</h5>
          <h3 className="ms-md-5">Projects I've Built</h3>
        </div>
      </Container>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="mb-5"
              key={index}
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard item={item} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Outlet />
    </motion.div>
  );
};

export default Projects;
