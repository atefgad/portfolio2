// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "styles";
import classes from "./Testislides.module.css";

export default function Slides() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testi__slides"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`${classes.testi__single}`}>
              <a
                href="https://www.upwork.com/freelancers/~01f9b4588d303359dd"
                target="_blank"
                rel="noreferrer"
              >
                <p className={`${classes.__comment}`}>{item.comment}</p>
              </a>
              <div className={`${classes.__author}`}>
                <div className={`${classes.__img}`}>
                  <img
                    src="/images/avatar.png"
                    alt="img"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={`${classes.__text}  ms-3`}>
                  <h4>{item.author}</h4>
                  <span>{item.client_type}</span>
                </div>
              </div>

              <div className={`${classes.testi__qoute}`}>
                <i class="ri-chat-quote-line"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
