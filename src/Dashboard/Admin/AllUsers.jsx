import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const AllUsers = () => {

    const axiosPublic = useAxiosPublic()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data
        }
    })
    
   const handleDelete = async (id) => {
        await axiosPublic.delete(`/users/${id}`)
        toast.success('Deleted Successfully')
        refetch()
    }

    const handleMakeAdmin =async (id) => {
        await axiosPublic.patch(`/users/admin/${id}`)
        toast.success('Updated Successfully')
        refetch()
    }
    

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All Users</h1>
                <h1 className="text-3xl">Total Users: {users.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            'Admin'
                                            :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-md text-white bg-orange-500"  ><FaUsers className='text-xl' /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-md text-white bg-red-500" ><MdDeleteForever className="text-xl" /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;