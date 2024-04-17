import { Link } from "react-router-dom";
import useShopCart from "../../Hooks/useShopCart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

const MyBooking = () => {

    const {shopingData, refetch} = useShopCart()
    const axiosPublic = useAxiosPublic()

    const handleDelete = async (id) => {
        const res = await axiosPublic.delete(`/shopingItem/${id}`)
        if (res.data.deletedCount > 0) {
            toast.success('Deleted Successfully')
        }
        refetch()
    }

    return (
        <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        shopingData?.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item?.name}
                            </td>
                            <td>{item?.price}</td>
                            <td>
                                <button className="btn btn-md text-white bg-red-500" onClick={() => handleDelete(item?._id)}><MdDeleteForever className="text-xl" /></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyBooking;