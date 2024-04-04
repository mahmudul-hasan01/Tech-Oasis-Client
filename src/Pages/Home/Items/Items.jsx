import img1 from '../../../assets/image/Featured/u3v0RbaA4clRM19cB9R1BBMRGxoLAzyXx3v9OBpa.jpg'
import img2 from '../../../assets/image/Featured/ubhFAt8S1pa50ab4uNbo2DipgcS6kSRBzZiPwmrs.jpg'
import img3 from '../../../assets/image/Featured/BQ0ce8wWrYMB3Y6Yqkdv7cjeVZUCKUoXxSiwoXmf.jpg'

const Items = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5'>
            <img className='h-[250px] w-full' src={img2} alt="" />
            <img className='h-[250px] w-full' src={img1} alt="" />
            <img className='h-[250px] w-full' src={img3} alt="" />
        </div>
    );
};

export default Items;