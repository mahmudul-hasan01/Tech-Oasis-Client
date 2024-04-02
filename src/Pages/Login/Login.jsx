import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/login.json";

const Login = () => {

    const { signIn, signInWithGoogle } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        await signIn(data?.email, data?.password)
        navigate('/')
    }
    const handleGoogle =async () => {
        await signInWithGoogle()
        navigate('/')
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <Lottie animationData={groovyWalkAnimation} />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className="text-center text-3xl font-semibold pt-6">Login</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mb-3 text-center">Don&apos;t have an account?<Link to={'/signUp'} className="underline font-semibold">Register</Link></p>
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

export default Login;