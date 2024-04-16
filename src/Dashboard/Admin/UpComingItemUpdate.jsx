import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpComingItemUpdate = () => {

    const { register, handleSubmit} = useForm()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['gadget'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming/${id}`)
            return res.data
        }
    })

    const onSubmit = async (data) => {

        const gadgets = {
            name: data?.name,
            category: data?.category,
            rating: data?.rating,
            price: parseFloat(data?.price),
            datails: data?.datails,
        }
        console.log(gadgets);
        await axiosPublic.patch(`/gadgets/${id}`, gadgets)
        toast.success('Update Successfully ....')
        navigate('/shop')
    }


    return (
         <div>
            {
                data &&
                <div>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex gap-5">

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Item Name*</span>
                                </div>
                                <input defaultValue={data?.name} {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full " />

                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Rating*</span>
                                </div>
                                <input defaultValue={data?.rating} {...register("rating")} type="text" placeholder="Rating" className="input input-bordered w-full" />

                            </label>

                        </div>

                        <div className="flex gap-5">

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select {...register("category")} defaultValue={data?.category} className="select select-bordered w-full ">
                                    <option disabled value={'default'}>Select a category</option>
                                    <option value="Phone">Laptop</option>
                                    <option value="TV & Monitors">Mobiles & Tabs</option>
                                    <option value="Watchs">Smart Watch</option>
                                    <option value="Computer & PC">Computer & PC</option>
                                    <option value="Smart Gadgets">Wired Earphone</option>
                                    <option value="Smart Gadgets">Speakers</option>
                                    <option value="Smart Gadgets">Power Cable</option>
                                    <option value="Smart Gadgets">Powerbank</option>
                                    <option value="Smart Gadgets">Neckband</option>
                                    <option value="Smart Gadgets">Power Adapter</option>
                                    <option value="Smart Gadgets">Hubs & Docks</option>
                                    <option value="Smart Gadgets">Wireless Headset</option>
                                    <option value="Smart Gadgets">Backpack</option>

                                </select>

                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input defaultValue={data?.price}  {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                            </label>

                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Datails*</span>
                            </div>
                            <textarea defaultValue={data?.datails} {...register("datails")} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                        </label>

                        {/* <input {...register("image")} type="file" className="file-input bg-sky-400 block w-full max-w-xs" /> */}
                        <div className="flex justify-center">
                            <button className="btn btn-outline border border-sky-400 bg-sky-400">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default UpComingItemUpdate;