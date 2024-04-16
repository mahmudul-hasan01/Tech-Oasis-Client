import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";


const UpComing = () => {
    const axiosPublic = useAxiosPublic()

    const { data, refetch } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming`)
            return res.data
        }
    })
    
    const handleDelete = async (id) => {
        const res = await axiosPublic.delete(`/upcoming/${id}`)
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
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => <tr key={item._id}>
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
                                <td>{item?.category}</td>
                                <td>{item?.price}</td>
                                <td>
                                    <Link to={`/updateUpComingItems/${item?._id}`}>
                                        <button className="btn btn-md text-white bg-orange-500" ><FaEdit className='text-xl' /></button>
                                    </Link>
                                </td>
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

export default UpComing;