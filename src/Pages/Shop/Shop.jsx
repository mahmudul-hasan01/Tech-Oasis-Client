// import { FcPhoneAndroid } from "react-icons/fc";
// import { IoWatch } from "react-icons/io5";
// import ShopCategory from "./ShopCategory";
// import { MdOutlineMonitor } from "react-icons/md";
// import { FaComputer } from "react-icons/fa6";
// import { AiTwotoneCustomerService } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Paginations from "./Paginations";
import icon from '../../assets/image/Eid/images.png'
import { Link } from "react-router-dom";
// import pagination from "./Pagination";


const Shop = () => {

    const axiosPublic = useAxiosPublic()

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsParPage] = useState(6)

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage


    const handleSubmit = (e) => {
        e.preventDefault()
        const searchs = e.target.search.value
        setSearch(searchs);
    }

    const { data } = useQuery({
        queryKey: ['gadgets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/gadgets?search=${search}`)
            return res.data
        }
    })
    const currentPost = data?.slice(firstPostIndex, lastPostIndex)


    return (
        <div className="mt-5">
            {/* <div className="py-4 flex items-center justify-evenly overflow-x-auto">
                <ShopCategory name={'Phone'} icon={FcPhoneAndroid}></ShopCategory>
                <ShopCategory name={'Watch'} icon={IoWatch}></ShopCategory>
                <ShopCategory name={'Tv & Monitor'} icon={MdOutlineMonitor}></ShopCategory>
                <ShopCategory name={'Computer'} icon={FaComputer}></ShopCategory>
                <ShopCategory name={'Computer'} icon={FaComputer}></ShopCategory>
                <ShopCategory name={'Gadgets'} icon={AiTwotoneCustomerService}></ShopCategory>
            </div>
            <hr /> */}
            <form onSubmit={handleSubmit} className="w-2/5 mx-auto flex">
                <label className="input w-full h-16 input-bordered flex border border-sky-300 rounded-r-none items-center gap-2">
                    <input type="text" name="search" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-r-xl hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Search</button>
            </form>

            <div className="grid grid-cols-3">
                {
                    currentPost?.map(phone => <div key={phone._id} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
                        <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                            <img className="rounded-lg bg-black/40 w-[200px] h-full" src={phone.image} />
                        </div>
                        <div className=" w-[85%] mx-auto font-semibold space-y-2">
                            <h6 className="text-sm md:text-base lg:text-lg">{phone.name}</h6>
                            <p className=" text-xl md:text-sm font-semibold">Price: {phone.price} <img src={icon} className='w-6 h-6 inline-block' alt="" /></p>
                        </div>
                        <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                            <button className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
                            <button className="flex items-center ">

                                <span className="text-[#c7c7c5]">Add to Cart</span>
                            </button>
                        </div>
                    </div>)
                }
            </div>
            <Paginations totalPosts={data?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Paginations>
        </div>
    );
};

export default Shop;