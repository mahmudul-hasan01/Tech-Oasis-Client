import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import icon from '../../assets/image/Eid/images.png'

const UpComingItems = () => {

    const axiosPublic = useAxiosPublic()

    const { data } = useQuery({
        queryKey: ['upComingItem'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming`)
            return res.data
        }
    })

    console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            data?.map(phone => <div key={phone._id} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                    <img className="rounded-lg bg-black/40 w-[200px] h-full" src={phone.image} />
                </div>
                <div className=" w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg">{phone.name}</h6>
                    <p className=" text-xl md:text-sm font-semibold">Price: {phone.price} <img src={icon} className='w-6 h-6 inline-block' alt="" /></p>
                </div>
                {/* <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                    <button className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                    <button className="flex items-center ">

                        <span className="text-[#c7c7c5]">Add to Cart</span>
                    </button>
                </div> */}
            </div>)
        }
    </div>
    );
};

export default UpComingItems;