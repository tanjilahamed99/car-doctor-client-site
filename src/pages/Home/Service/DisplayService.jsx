import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

const DisplayService = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card shadow-xl p-7">
            <img className='w-[400px] h-[300px] mx-auto' src={img} alt="Shoes" />
            <div className="">
                <h2 className="text-2xl font-bold text-[#444] my-3">{title}</h2>
                <div className='flex  items-center justify-between'> 
                    <p className='text-[#FF3811] font-bold text-xl'>Price : ${price}</p>
                    <FaArrowRight className='text-[#FF3811] font-bold text-xl'></FaArrowRight>
                </div>
            </div>
        </div>
    );
};

DisplayService.propTypes = {
    service: PropTypes.object
};

export default DisplayService;