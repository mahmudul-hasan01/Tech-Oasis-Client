import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link, useNavigate, useParams } from "react-router-dom";
import icon from '../../../assets/image/Eid/images.png'
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const FeaturedAllCart = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const navigate = useNavigate()


    const name = useParams()

    const { data } = useQuery({
        queryKey: ['gadgetsCategory'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/gadgets/category?name=${name?.name}`)
            return res.data
        }
    })

    const handleAddItem = async (phone) => {
        if (user?.email) {
            const shopCart = {
                productId: phone?._id,
                email: user?.email,
                name: phone?.name,
                image: phone?.image,
                price: phone?.price
            }
            console.log(shopCart);
            await axiosPublic.post(`/shopingItem`, shopCart)
            toast.success('Product Add Successfully')
        } else {
            toast.error('Please Login')
            navigate('/login')
        }
    }

    return (
        <div className="pt-16">
            {
                data?.length > 0 ?

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            data?.map(phone => <div key={phone._id} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
                                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                                    <img className="rounded-lg bg-black/40 w-[200px] h-full" src={phone.image} />
                                </div>
                                <div className=" w-[85%] mx-auto font-semibold space-y-2">
                                    <h6 className="text-sm md:text-base lg:text-lg">{phone.name}</h6>
                                    <p className=" text-xl md:text-sm font-semibold">Price: {phone.price}
                                        <img src={icon} className='w-6 h-6 inline-block' alt="" /></p>
                                </div>
                                <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">

                                    <Link to={`/shopDetails/${phone._id}`} className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Details</Link>

                                    <button onClick={() => handleAddItem(phone)} className="px-4 py-2 rounded-lg border border-sky-500 hover:bg-sky-600 hover:text-white duration-300 hover:scale-105  font-semibold font-sans">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>)
                        }
                    </div>
                    :
                    <div className="flex justify-center items-center text-6xl font-bold">
                        <p>No Data Available</p>
                    </div>
            }

        </div>
    );
};

export default FeaturedAllCart;