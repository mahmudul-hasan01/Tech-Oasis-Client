/* eslint-disable react/prop-types */

const ShopCategory = ({ name, icon: Icon, selected }) => {
    return (
        <div>
            <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
                <Icon size={26} />
                <div className='text-sm font-medium'> {name}</div>
            </div>
        </div>
    );
};

export default ShopCategory;