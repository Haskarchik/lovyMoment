import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={props.props[0]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.props[1]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.props[2]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.props[3]} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <ReactPlayer
          controls={true}
          width="100%"
          height="95%"
          url="https://youtu.be/nOl1fV3GKqI"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
