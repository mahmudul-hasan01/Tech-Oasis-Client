import eidImage from '../../../assets/image/Eid/TcILWa0iPhbSw5RiHT6Whln8nD2w2DVe34EQREk2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import EidDealsCart from './EidDealsCart';


const EidDeals = () => {

    const [deals, setDeals] = useState([])

    useEffect(() => {
        fetch('/eidDeals.json')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, [])

    return (
        <div style={{ backgroundImage: `url(${eidImage})` }} className="h-[350px] bg-[#402A4E] bg-fixed  bg-no-repeat md:h-[450px] sm:px-2 px-3 mx-3 py-20 rounded-t-2xl">
            <div className="">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        840: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation,Autoplay, Pagination]}

                    className="mySwiper"
                >
                    {
                        deals?.map(deal => <SwiperSlide key={deal.id}>
                            <EidDealsCart image={deal.image} name={deal.name} price={deal.price}></EidDealsCart>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default EidDeals;