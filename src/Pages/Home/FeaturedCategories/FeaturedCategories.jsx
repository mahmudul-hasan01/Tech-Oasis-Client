import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ShopingCart from "../../Shop/ShopingCart";
import Paginations from "../../../Pages/Shop/Paginations";
import FeaturedAllCart from "./FeaturedAllCart";


const FeaturedCategories = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('/phone.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    const axiosPublic = useAxiosPublic()

    const [search, setSearch] = useState('')
    const [categoryData, setCategoryData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsParPage] = useState(8)

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage


    const handleSubmit = (e) => {
        e.preventDefault()
        const searchs = e.target.search.value
        console.log(searchs);
        setSearch(searchs);
    }

    const handleClick = (featuredData) => {
        setCategoryData(featuredData);
    }

    const { data } = useQuery({
        queryKey: ['gadgets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/gadgets?search=${categoryData}`)
            return res.data
        }
    })
    const currentPost = data?.slice(firstPostIndex, lastPostIndex)



    // console.log(featured,"............", data);

    return (
        <div className="mt-10">
            {/* <div className="flex flex-col items-center gap-2 mt-10">
                <p className="text-3xl">All Phone</p>
                <p className="text-green-500">Shop Your Desired Product from Featured Category</p>
            </div> */}

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4 lg:col-span-2">
                    <h1 className="underline hidden lg:block text-3xl mb-4 text-center">Phone Name</h1>
                    {
                        // to={`/featured/${item.name}`}
                        featured?.map(item => <div onClick={() => handleClick(item?.name)} key={item.id} className="card mb-3 bg-base-100 shadow-xl border-2 border-black cursor-pointer">
                            <div className="text-center">
                                <p>{item.name}</p>
                            </div>
                        </div>)
                    }
                </div>

                <div className="col-span-8 lg:col-span-10">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data?.length > 0 ? currentPost?.map(phone => <ShopingCart key={phone._id} phone={phone}></ShopingCart>)
                                :
                                <div className="col-span-10 flex w-full text-center justify-center items-center text-5xl font-semibold">
                                    <p>No Data Available</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <Paginations totalPosts={data?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Paginations>
        </div>
    );
};

export default FeaturedCategories;