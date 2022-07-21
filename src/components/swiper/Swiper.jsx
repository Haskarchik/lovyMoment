import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default (props) => {
  let swiperPage = [];

  function slide() {
    let slide = [];

    for (let i = 0; i < props.props.albom.length; i++) {
      slide.push(
        <SwiperSlide>
          <img src={props.props.albom[i]} alt="" />
        </SwiperSlide>
      );
    }

    return slide;
  }
  function video() {
    let video = [];
    if (props.props.video.length > 2) {
      video.push(
        <SwiperSlide>
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={props.props.video}
          />
        </SwiperSlide>
      );
    }
    else{
      video = []
    }
    return(video)
  }
console.log(props.props.video);
  swiperPage.push(
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
      {slide()}
      {video()}
      ...
    </Swiper>
  );
  return <div>{swiperPage}</div>;
};
