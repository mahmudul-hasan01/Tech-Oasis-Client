import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpComingItemUpdate = () => {

    const { register, handleSubmit } = useForm()
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
                                    <option value='SAMSUNG'>SAMSUNG</option>
                                    <option value='APPLE'>APPLE</option>
                                    <option value='HUAWEI'>HUAWEI</option>
                                    <option value='NOKIA'>NOKIA</option>
                                    <option value='SONY'>SONY</option>
                                    <option value='LG'>LG</option>
                                    <option value='HTC'>HTC</option>
                                    <option value='MOTOROLA'>MOTOROLA</option>
                                    <option value='LENOVO'>LENOVO</option>
                                    <option value='XIAOMI'>XIAOMI</option>
                                    <option value='GOOGLE'>GOOGLE</option>
                                    <option value='HONOR'>HONOR</option>
                                    <option value='OPPO'>OPPO</option>
                                    <option value='REALME'>REALME</option>
                                    <option value='ONEPLUS'>ONEPLUS</option>
                                    <option value='VIVO'>VIVO</option>
                                    <option value='MEIZU'>MEIZU</option>
                                    <option value='BLACKBERRY'>BLACKBERRY</option>
                                    <option value='ASUS'>ASUS</option>
                                    <option value='ALCATEL'>ALCATEL</option>
                                    <option value='ZTE'>ZTE</option>
                                    <option value='MICROSOFT'>MICROSOFT</option>
                                    <option value='VODAFONE'>VODAFONE</option>
                                    <option value='ENERGIZER'>ENERGIZER</option>
                                    <option value='CAT'>CAT</option>
                                    <option value='SHARP'>SHARP</option>
                                    <option value='MICROMAX'>MICROMAX</option>
                                    <option value='NOTHING'>NOTHING</option>
                                    <option value='ULEFONE'>ULEFONE</option>
                                    <option value='TECNO'>TECNO</option>
                                    <option value='DOOGEE'>DOOGEE</option>
                                    <option value='BLACKVIEW'>BLACKVIEW</option>
                                    <option value='CUBOT'>CUBOT</option>
                                    <option value='OUKITEL'>OUKITEL</option>
                                    <option value='ITEL'>ITEL</option>
                                    <option value='TCL'>TCL</option>

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