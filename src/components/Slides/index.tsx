import {  Box } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard
  } from "swiper";
import { SlideContent } from "./SlideContent";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slides() {
  return (
    <Box mx={["0", "10"]} my="5">
      <Swiper
        cssMode={true}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
          <SwiperSlide>
              <SlideContent place="Europa" subtitle="O continente mais antigo." image="continent.png"/>
          </SwiperSlide>
          <SwiperSlide>
          <SlideContent place="Europa" subtitle="O continente mais antigo." image="continent.png"/>
          </SwiperSlide>
      </Swiper>
    </Box>
  );
}
