import check from '../../../assets/icons/check.svg'
import deliveryt from '../../../assets/icons/deliveryt.svg'
import person from '../../../assets/icons/person.svg'
import Wrench from '../../../assets/icons/Wrench.svg'
import group2 from '../../../assets/icons/group.svg'
const Features = () => {
    return (
        <div className="my-32">
            <p className="text-[#FF3811] text-xl text-center font-bold">Core Features</p>
            <h2 className="text-center my-3 text-4xl text-[#151515] font-bold">Why Choose Us</h2>
            <p className="text-center text-[#737373] lg:px-[250px]">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <div className="grid grid-cols-5 justify-center items-center gap-3 mt-5">
                <div className='border-2 p-10 hover:bg-[#FF3811] hover:text-white'>
                    <img className='mx-auto h-16 w-16' src={person} alt="" />
                    <h2 className='font-bold text-lg text-center mt-2'>24/7 Support</h2>
                </div>
                <div className='border-2 p-10 hover:bg-[#FF3811] hover:text-white'>
                    <img className='mx-auto h-16 w-16' src={check} alt="" />
                    <h2 className='font-bold text-lg text-center mt-2'>100% Guranty</h2>
                </div>
                <div className='border-2 p-10 hover:bg-[#FF3811] hover:text-white'>
                    <img className='mx-auto h-16 w-16' src={Wrench} alt="" />
                    <h2 className='font-bold text-lg text-center mt-2'>Best Equipment</h2>
                </div>
                <div className='border-2 p-10 hover:bg-[#FF3811] hover:text-white'>
                    <img className='mx-auto h-16 w-16' src={deliveryt} alt="" />
                    <h2 className='font-bold text-lg text-center mt-2'>Timely Delivery</h2>
                </div>
                <div className='border-2 p-10 hover:bg-[#FF3811] hover:text-white'>
                    <img className='mx-auto h-16 w-16' src={group2} alt="" />
                    <h2 className='font-bold text-lg text-center mt-2'>Expert Team</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;