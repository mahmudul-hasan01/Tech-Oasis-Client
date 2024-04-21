import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {

    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    const { data: AdminData, refetch } = useQuery({
        queryKey: ['Admin-Stats'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/admin-stats`)
            return res.data
        }
    })
    console.log(AdminData);

    return (
        <div>
            <h1>Hi, Welcome </h1>
            <h1>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h1>
            <div className="stats shadow flex justify-center">

                <div className="stat place-items-center">
                    <div className="stat-title">All Gadgets</div>
                    <div className="stat-value">{AdminData?.item}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">{AdminData?.user}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">UpComing Gadgets</div>
                    <div className="stat-value">{AdminData?.upComing}</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Totle Revenue</div>
                    <div className="stat-value  text-secondary">{AdminData?.revenue}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;