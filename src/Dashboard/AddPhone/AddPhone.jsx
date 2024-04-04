import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPhone = () => {

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`
    const axiosPublic = useAxiosPublic()
    // const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm()
    // const [phone, setPhone] = useState([])


    const onSubmit = async (data) => {

        console.log(data);

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
            const gadget = await axiosPublic.post('/gadgets', gadgets)
            toast.success('Add Successfully')
            reset()
            console.log(gadget.data);
        }
    }
    // const handleAddMeal = async () => {

    //     if (meals.image) {
    //         const meal = await axiosSecure.post('/mealItem', meals)
    //         console.log(meal.data);
    //     }
    // }
    // const handleAddUpcoming = async () => {

    //     if (meals.image) {
    //         const meal = await axiosSecure.post('/upcoming', meals)
    //         console.log(meal.data);
    //     }


    return (
        <div>
            <div>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>



                    <div className="flex gap-5">

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

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} defaultValue={'default'} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="Phone">Phone</option>
                                <option value="TV & Monitors">TV & Monitors</option>
                                <option value="Watchs">Watchs</option>
                                <option value="Computer & PC">Computer & PC</option>
                                <option value="Smart Gadgets">Smart Gadgets</option>
                                <option value="Smart Gadgets">Power Cable</option>

                            </select>

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                        </label>

                    </div>

                    {/* <div className="flex gap-5"> */}



                    {/* <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Time/Date*</span>
                            </div>
                            <input {...register("time")} type="time" placeholder="Time" className="input input-bordered w-full" />

                        </label> */}

                    {/* </div> */}

                    {/* <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Like*</span>
                            </div>
                            <input {...register("like")} defaultValue={0} type="text" className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reviews*</span>
                            </div>
                            <input {...register("reviews")} defaultValue={0} type="text" className="input input-bordered w-full" />

                        </label>

                    </div> */}

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Datails*</span>
                        </div>
                        <textarea {...register("datails")} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                    </label>

                    <input {...register("image")} type="file" className="file-input bg-sky-400 block w-full max-w-xs" />
                    <button className="btn btn-outline border border-sky-400 bg-sky-400">
                        Submit Form
                    </button>
                </form>
                {/* <div className="flex justify-center gap-10 mt-8">
                    <button onClick={handleAddMeal} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                        Add Meal
                    </button>
                    <button onClick={handleAddUpcoming} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                        Add Upcoming
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default AddPhone;