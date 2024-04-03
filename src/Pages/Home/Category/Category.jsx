import img1 from '../../../assets/image/Phone/EoY-2022-Best-Phones-on-leather.jpg'
import img2 from '../../../assets/image/Watch/fitbit_versa_2_core_inbox_and_se_v5b_screens_centered.jpg'
import img3 from '../../../assets/image/TV/119be156595c31bc0a0c05a1609c39fc7d366cc5.webp'
import img4 from '../../../assets/image/TV/Surface-device-family-SOURCE-Microsoft-web.webp'
import img5 from '../../../assets/image/TV/1698401663629.jpg'

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CategoryCart from './CategoryCart';

const Category = () => {

    // const swiper = new Swiper('.swiper', {
    //     // Default parameters
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     // Responsive breakpoints
    //     breakpoints: {
    //       320: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //       },
    //       480: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //       },
    //       640: {
    //         slidesPerView: 4,
    //         spaceBetween: 40
    //       }
    //     }
    //   })

    return (
        <div className='gird grid-cols-3'>
            <Swiper
                slidesPerView={2}
                // breakpoints={swiper}
                // breakpoints={{
                //     breakpoints: {
                //         320: {
                //           slidesPerView: 2,
                //           spaceBetween: 20
                //         },
                //         480: {
                //           slidesPerView: 3,
                //           spaceBetween: 30
                //         },
                //         640: {
                //           slidesPerView: 4,
                //           spaceBetween: 40
                //         }
                //       }
                // }}
                spaceBetween={30}
                allowSlideNext={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                
            className="mySwiper"
            >
            <SwiperSlide>
                <CategoryCart name={'Phones'} product={7} image={img1}></CategoryCart>
            </SwiperSlide>
            <SwiperSlide>
                <CategoryCart name={'TV & Monitors'} product={6} image={img3}></CategoryCart>
            </SwiperSlide>
            <SwiperSlide>
                <CategoryCart name={'Watchs'} product={4} image={img2}></CategoryCart>
            </SwiperSlide>
            <SwiperSlide>
                <CategoryCart name={'Computer & PC'} product={3} image={img4}></CategoryCart>
            </SwiperSlide>
            <SwiperSlide>
                <CategoryCart name={'Smart Gadgets'} product={5} image={img5}></CategoryCart>
            </SwiperSlide>
        </Swiper>
        </div >
    );
};

export default Category;