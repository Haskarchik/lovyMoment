import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/modal.module.css'
export default (props) => {
  let swiperPage = [];

  function slide() {
    let slide = [];

    for (let i = 0; i < props.props.albom.length; i++) {
      slide.push(
        <SwiperSlide onClick={()=> props.props.modal(true)}>
          <img src={props.props.albom[i]} alt="" />
        </SwiperSlide>
      );
    }

    return slide;
  }
  function video() {
    let video = [];

    if(props.props.video != undefined){
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
  }}
  
  function items() {
    let items = [];

      if ( props.props.albom.length > 0 ) {
        if(props.props.video != undefined){
          let videoCount
          if(props.props.video.length > 5)
          videoCount =1
          else{
            videoCount = 0
          }
        items.push(
          <div className="items">
        <div className="imageCount">
          {props.props.albom.length}
        </div>
        <div className="videoCount">
          {videoCount }
        </div>
        </div>
      );
    }
    else{
      items = []
    }
      }
    return(items)
  }

  swiperPage.push(
    <Swiper className={ ' '+  props.props.SwiperClass + ' ' + (props.props.isActive ? 'Swiper_Module': ' 3')} 
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
      {items()}
      ...
    </Swiper>
  );
  return <div>{swiperPage}</div>;
};
