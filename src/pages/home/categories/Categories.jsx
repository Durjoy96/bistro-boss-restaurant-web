import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <>
      <SectionTitle
        title="ORDER ONLINE"
        subtitle="---From 11:00am to 10:00pm---"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper main-container"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="uppercase text-xl text-white font-medium relative bottom-20 text-center">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="uppercase text-xl text-white font-medium relative bottom-20 text-center">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="uppercase text-xl text-white font-bold relative bottom-20 text-center">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="uppercase text-xl text-white font-bold relative bottom-20 text-center">
            Desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="uppercase text-xl text-white font-bold relative bottom-20 text-center">
            Others
          </h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Categories;
