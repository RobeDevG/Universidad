import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FondoHome from '../assets/FondoHome.webp'
import FondoHome_1 from '../assets/FondoHome_1.webp'
import FondoHome_2 from '../assets/FondoHome_2.webp'
import FondoHome_3 from '../assets/FondoHome_3.webp'
import FondoHome_4 from '../assets/FondoHome_4.webp'


function Home() {
  return (
    <header className='border-b-8 border-[#FFC04A]'>
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
      <SwiperSlide><img src={FondoHome} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={FondoHome_1} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={FondoHome_2} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={FondoHome_3} alt="tatuajes" /></SwiperSlide>
      <SwiperSlide><img src={FondoHome_4} alt="tatuajes" /></SwiperSlide>
        
        <div className='absolute left-10 bottom-5 z-10 text-white'>
        <h1 className='text-6xl shadow select-none'>Ciudad de los saberes</h1>
        <h2 className='text-4xl shadow select-none'>Pensar como Universidad</h2>
        </div>
    

    </Swiper>

    </header>
  )
}

export default Home;
