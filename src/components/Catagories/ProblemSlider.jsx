import ProblemCatagories from './ProblemCatagories';
import problemCatagoriesData from '../jsonFiles/ProblemCatagoriesData';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper 
      // install Swiper modules
      className=''
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div  className='flex justify-around relative'>
        {problemCatagoriesData.map((problemCatagory) => (
          <SwiperSlide className='rounded-full'>
          <ProblemCatagories 
            key = {problemCatagory.id}
            image = {problemCatagory.image}
            problem = {problemCatagory.problem}
            price = {problemCatagory.price}
          />
          </SwiperSlide>
        ))}
        </div>
    </Swiper>
  );
};