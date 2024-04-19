import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {

    const {user} = useAuth()

    const axiosPublic = useAxiosPublic()

    const { data: isAdmin = [], isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/role/${user?.email}`)
            return res.data.role
        }
    })
    return {isAdmin, isLoading}
};

export default useRole;