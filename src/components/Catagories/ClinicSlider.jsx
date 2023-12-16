import clinicCatagoriesData from '../jsonFiles/ClinicCatagoriesData';
import ClinicCatagories from './ClinicCatagories';

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
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div  className='flex justify-around relative'>
        {clinicCatagoriesData.map((clinicCatagory) => (
          <SwiperSlide className='rounded-full'>
          <ClinicCatagories 
            key={clinicCatagory.id}
            image = {clinicCatagory.image}
            clinicType={clinicCatagory.clinicType}
            description={clinicCatagory.description}
          />
          </SwiperSlide>
        ))}
        </div>
    </Swiper>
  );
};