import { useEffect, useState } from "react";

const Phone = () => {

    const [phoneData, setPhoneData] = useState({})
    useEffect(() => {
        fetch('/phone.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data?.products?.phones)
                setPhoneData(data)
            })
    }, [])
    console.log(phoneData?.products?.phones);

    return (
        <div className="grid grid-cols-3">
            {/* <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-violet-400 m-1">Hover</div>
            <ul tabIndex={0} className="dropdown-content -left-14 text-center z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div> */}

            {
                phoneData?.products?.phones.map(phone => <div key={phone.id} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                    {/* <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                        <div className="flex items-center">
                            <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
                        </div>
                        <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
                    </div> */}
                    <img className="rounded-lg bg-black/40 w-[200px] h-full" src={phone.imageUrl} />
                </div>
                <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg">{phone.name}</h6>
                    <p className="text-gray-400 text-xs md:text-sm font-semibold">{phone.price}</p>
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
    );
};

export default Phone;