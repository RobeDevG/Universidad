import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FondoHome from "../assets/FondoHome.webp";
import FondoHome_1 from "../assets/FondoHome_1.webp";
import FondoHome_2 from "../assets/FondoHome_2.webp";
import FondoHome_3 from "../assets/FondoHome_3.webp";
import FondoHome_4 from "../assets/FondoHome_4.webp";

function Slaider() {

  return (
    <div className="border-b-8 border-[#FFC04A] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        loading="lazy"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        freeMode={true}
      >
        <SwiperSlide>
          <img className="w-full" src={FondoHome} alt="img" loading="lazy" title="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={FondoHome_1} alt="img" loading="lazy" title="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={FondoHome_2} alt="img" loading="lazy" title="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={FondoHome_3} alt="img" loading="lazy" title="imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={FondoHome_4} alt="img" loading="lazy" title="imagen" />
        </SwiperSlide>

        <div className="absolute left-10 bottom-5 z-10 text-white">
          <h1 className="text-6xl shadow select-none font-custom-font">Ciudad de los saberes</h1>
          <h2 className="text-4xl shadow select-none font-custom-font">
            Pensar como Universidad
          </h2>
        </div>
      </Swiper>
    </div>
  );
}

export default Slaider;
