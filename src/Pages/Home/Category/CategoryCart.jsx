/* eslint-disable react/prop-types */

const CategoryCart = ({ name, product, image }) => {
    return (
        <div>
            <div className="max-[350px] group md:w-[350px] cursor-pointer bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                <div className="space-y-2 text-center">
                    <h2 className="text-slate-800 font-medium text-3xl">{name}</h2>
                    <p>{product} Products</p>
                </div>
                {/* Card Image */}
                <img className="w-[300px] h-[170px]  group-hover:scale-110 duration-500 transition bg-gray-400 rounded-2xl" src={image} alt="card navigate ui" />
            </div>
        </div>
    );
};

export default CategoryCart;