import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const FeaturedCategories = () => {

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        fetch('/featured.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])


    return (
        <div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-3xl">Featured Categories</p>
                <p className="text-green-500">Shop Your Desired Product from Featured Category</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-10">
                {
                    featured?.map(item => <Link to={'/shop'} key={item.id} className="card bg-base-100 shadow-xl   border-2 border-black cursor-pointer">
                        <figure className="px-10 pt-4">
                            <img src={ item.image} alt="image" className="h-[100px] w-[100px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>{item.name}</p>
                        </div>
                    </Link>)
                }
            </div>

        </div>
    );
};

export default FeaturedCategories;