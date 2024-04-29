// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useState } from "react";
// import Paginations from "./Paginations";
// import ShopingCart from "./ShopingCart";
import FeaturedCategories from '../../Pages/Home/FeaturedCategories/FeaturedCategories'


const Shop = () => {

    // const axiosPublic = useAxiosPublic()

    // const [search, setSearch] = useState('')
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostsParPage] = useState(6)

    // const lastPostIndex = currentPage * postsPerPage
    // const firstPostIndex = lastPostIndex - postsPerPage


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const searchs = e.target.search.value
    //     console.log(searchs);
    //     setSearch(searchs);
    // }

    // const { data } = useQuery({
    //     queryKey: ['gadgets'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/gadgets?search=${search}`)
    //         return res.data
    //     }
    // })
    // const currentPost = data?.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="mt-6">
            
            {/* <form onSubmit={handleSubmit} className="w-3/4 md:w-3/5 lg:w-2/5 mx-auto flex">
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
            </form> */}
           <FeaturedCategories></FeaturedCategories>
            
            {/* <Paginations totalPosts={data?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Paginations> */}
        </div>
    );
};

export default Shop;