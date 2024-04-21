import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: payments = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment/${user?.email}`)
            return res.data.data
        }
    })

    return (
        <div>
            <h1 className="text-3xl text-center my-7">Total Payments: {payments?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white bg-black/50">
                                <th>#</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>$ {item.price}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{item.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;