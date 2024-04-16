import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Feedback = () => {

    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })

    return (
        <div>
            <div>
                <p className='text-center text-6xl font-semibold'>Customers Feedback</p>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="px-32 my-16 flex flex-col items-center gap-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />
                                <FaQuoteRight className="text-5xl" />
                                <p>{review?.details}</p>
                                <h1 className="text-2xl text-orange-500">{review?.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;