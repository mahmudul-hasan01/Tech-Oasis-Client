import useAuth from "../../Hooks/useAuth";

const Profile = () => {

    const {user} = useAuth()

    return (
        <div>
            <div className="mx-auto my-10 flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 font-sans shadow-lg dark:bg-[#18181B]">
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
                {/* social icons  */}
                {/* <div className="flex justify-between gap-4 py-2">
                    {svgs?.map((svg, idx) => (<div key={idx} className="rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150">{svg?.svg}</div>))}
                </div> */}
            </div>
        </div>
    );
};

export default Profile;