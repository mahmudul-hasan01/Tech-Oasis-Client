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
import ShopingCart from "./ShopingCart";


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
        console.log(searchs);
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
        <div className="mt-6">
            {/* <div className="py-4 flex items-center justify-evenly overflow-x-auto">
                <ShopCategory name={'Phone'} icon={FcPhoneAndroid}></ShopCategory>
                <ShopCategory name={'Watch'} icon={IoWatch}></ShopCategory>
                <ShopCategory name={'Tv & Monitor'} icon={MdOutlineMonitor}></ShopCategory>
                <ShopCategory name={'Computer'} icon={FaComputer}></ShopCategory>
                <ShopCategory name={'Computer'} icon={FaComputer}></ShopCategory>
                <ShopCategory name={'Gadgets'} icon={AiTwotoneCustomerService}></ShopCategory>
            </div>
            <hr /> */}
            <form onSubmit={handleSubmit} className="w-3/4 md:w-3/5 lg:w-2/5 mx-auto flex">
                <select type="text" name="search" defaultValue={'default'} className="input w-full h-16 input-bordered flex border border-sky-300 rounded-r-none items-center gap-2">
                    <option disabled value={'default'}>Select a category</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobiles & Tabs">Mobiles & Tabs</option>
                    <option value="Smart Watch">Smart Watch</option>
                    <option value="Computer & PC">Computer & PC</option>
                    <option value="Wired Earphone">Wired Earphone</option>
                    <option value="Speakers">Speakers</option>
                    <option value="Power Cable">Power Cable</option>
                    <option value="Powerbank">Powerbank</option>
                    <option value="Neckband">Neckband</option>
                    <option value="Power Adapter">Power Adapter</option>
                    <option value="Hubs & Docks">Hubs & Docks</option>
                    <option value="Wireless Headset">Wireless Headset</option>
                    <option value="Backpack">Backpack</option>

                </select>
                <button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-r-xl hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Search</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    currentPost?.map(phone => <ShopingCart key={phone._id} phone={phone}></ShopingCart>)
                }
            </div>
            <Paginations totalPosts={data?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Paginations>
        </div>
    );
};

export default Shop;