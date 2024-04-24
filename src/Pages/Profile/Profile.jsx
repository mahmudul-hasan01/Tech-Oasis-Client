import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useRole from "../../Hooks/useRole";

const Profile = () => {

    const {user} = useAuth()
    const {isAdmin} = useRole()
    const axiosPublic = useAxiosPublic()

    console.log(isAdmin);

    const adminRequest =async () => {
        await axiosPublic.patch(`/users/request/${user?.email}`)
        toast.success('Request for admin')

    }

    return (
        <div>
            <div className="mx-auto mt-14 flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 font-sans shadow-lg dark:bg-[#18181B]">
                <div className="group relative">
                    <img width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src={user?.photoURL} alt="card navigate ui" />
                    <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                    <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-2xl text-gray-700 dark:text-white/90">{user?.displayName}</h1>
                    <p>{user?.email}</p>
                </div>
                <div className="flex w-full justify-between py-2">
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Posts</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">11</p>
                    </div>
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Following</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">250</p>
                    </div>
                    <div className="space-y-1 text-center ">
                        <p className="text-gray-500 dark:text-white/70">Followers</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">11</p>
                    </div>
                </div>
                
                 <button onClick={adminRequest} className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Requested'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Make-Admin'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-12 rounded-xl relative group"></button> 
                
            </div>
        </div>
    );
};

export default Profile;