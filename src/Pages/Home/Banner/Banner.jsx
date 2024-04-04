// import img1 from '../../../assets/image/woman-having-fun-with-vr-4.webp'
import img1 from '../../../assets/image/Phone/AT82vTRU91c5z4ftoLXSassyJQl07XDoBGtvC1Kz.jpg'
import img2 from '../../../assets/image/Phone/JMwviK7LCMV0aJ9DbRMpHFJU9GmFO3G8g7l53LMc.jpg'
import img3 from '../../../assets/image/Phone/EoY-2022-Best-Phones-on-leather.jpg'
import img4 from '../../../assets/image/Phone/WOh2tZ5sVdJpSCu39fxLa0FFIRCbkhmop9VewU9Y.jpg'

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <div className='relative'>
            <Swiper
                navigation={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">
                <SwiperSlide>
                    <img className='h-[300px] lg:h-screen w-full' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px] lg:h-screen w-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px] lg:h-screen w-full' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px] lg:h-screen w-full' src={img4} alt="" />
                </SwiperSlide>
                <div className="autoplay-progress absolute z-20 bottom-5 right-16 text-white" slot="container-end">
                    <div ref={progressCircle} className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
                    {/* <svg className='w-96' viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg> */}
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;