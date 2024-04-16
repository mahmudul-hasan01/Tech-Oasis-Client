import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";

const AddPhone = () => {

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const [gadget, setGadget] = useState([])


    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
            const gadgets = {
                name: data?.name,
                distributorName: user.displayName ? user.displayName : 'Null',
                distributorEmail: user.email,
                category: data?.category,
                rating: data?.rating,
                price: parseFloat(data?.price),
                datails: data?.datails,
                image: res?.data?.data?.display_url
            }
            setGadget(gadgets)
            // await axiosPublic.post('/gadgets', gadgets)
            // toast.success('Add Successfully')
            // reset()
        }
    }
    const handleAddMeal = async () => {

        if (gadget.image) {
            const data = await axiosPublic.post('/gadgets', gadget)
            console.log(data.data);
            toast.success('Add Successfully')
        }
    }
    const handleAddUpcoming = async () => {

        if (gadget.image) {
            const data = await axiosPublic.post('/upcoming', gadget)
            console.log(data.data);
            toast.success('Add Successfully')
        }

    }
    return (
        <div>
            <div>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col lg:flex-row gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Item Name*</span>
                            </div>
                            <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full " />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Rating*</span>
                            </div>
                            <input {...register("rating")} type="text" placeholder="Rating" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} defaultValue={'default'} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Mobiles & Tabs">Mobiles & Tabs</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Computer & PC">Computer & PC</option>
                                <option value="Wired Earphone">Wired Earphone</option>
                                <option value="Speakers">Speakers</option>
                                <option value="Power Cable">Power Cable</option>
                                <option value="Powerbank">Powerbank</option>
                                <option value="Neckband">Neckband</option>
                                <option value="Power Adapter">Power Adapter</option>
                                <option value="Hubs & Docks">Hubs & Docks</option>
                                <option value="Wireless Headset">Wireless Headset</option>
                                <option value="Backpack">Backpack</option>

                            </select>

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Datails*</span>
                        </div>
                        <textarea {...register("datails")} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                    </label>

                    <input {...register("image")} type="file" className="file-input bg-sky-400 block w-full max-w-xs" />
                    <div className="flex justify-center">
                        <button className="btn btn-outline border border-sky-400 bg-sky-400">
                            Form Submit
                        </button>
                    </div>
                </form>
                <div className="flex justify-center gap-10 mt-8">
                    <button onClick={handleAddMeal} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                        Add Gadgets
                    </button>
                    <button onClick={handleAddUpcoming} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                        Add Upcoming
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPhone;