/* eslint-disable react/prop-types */
import icon from '../../../assets/image/Eid/images.png'

const EidDealsCart = ({image, name, price}) => {
    return (
        <div className="flex justify-center items-center cursor-pointer group">
            <div className="card bg-base-100 shadow-xl w-64 h-[260px]  border-2 border-black">
                <figure className="px-10 pt-4">
                    <img src={image} alt="image" className="w-[100px] h-[100px] rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <p className='group-hover:text-green-600'>{name}</p>
                    <p><img src={icon} className='w-6 h-6 inline-block' alt="" /> {price}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default EidDealsCart;