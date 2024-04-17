import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useShopCart = () => {

    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    const { data: shopingData = [], refetch } = useQuery({
        queryKey: ['shopingItem'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/shopingItem/${user?.email}`)
            return res.data
        }
    })
    return {shopingData, refetch}
};

export default useShopCart;