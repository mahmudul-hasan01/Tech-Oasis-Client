import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const FeaturedAllCart = () => {

    const axiosPublic = useAxiosPublic()

    const name = useParams()
    console.log(name.name);

    const { data } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/featured?name=${name.name}`)
            return res.data
        }
    })

    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default FeaturedAllCart;