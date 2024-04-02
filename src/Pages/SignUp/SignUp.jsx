import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/register.json";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";
import toast from "react-hot-toast";
// import { useState } from "react";
// import { FiUpload } from "react-icons/fi";

const SignUp = () => {

    const { createUser, updateUserProfile, signInWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        await createUser(data?.email, data?.password)
        // const userInfo = {
        //     name: data?.name,
        //     email: data?.email,
        // }
        // axiosPublic.post('/users', userInfo)
        //     .then(res => {
        //         console.log(res?.data);
        //     })


        const imageFile = { image: data.image[0] }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res?.data?.success) {
            await updateUserProfile(data?.name, res?.data?.data?.display_url)
            toast.success('Register Successfully')
            navigate('/')
        }

    }

    const handleGoogle = async () => {
        await signInWithGoogle()
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={groovyWalkAnimation} />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <p className="text-center text-3xl font-semibold pt-6">Register</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* form */}
                            <input type="file" {...register("image", { required: true })} className="file-input mt-3 file-input-bordered w-full max-w-xs" />
                            {/* form */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="mb-3 text-center">Do you have account?<Link to={'/login'} className="underline font-semibold"> Login</Link></p>
                        <hr />
                        <button onClick={handleGoogle} type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
                            <FcGoogle className="w-6 inline-block mr-3" />
                            Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;