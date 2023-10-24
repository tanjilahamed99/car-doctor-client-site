import { FaStar } from "react-icons/fa";
import quote from '../../../assets/icons/quote.svg'

const Customer = () => {
    return (
        <div className="my-10">
            <p className="text-[#FF3811] text-xl text-center font-bold">Testimonial</p>
            <h2 className="text-center my-3 text-4xl text-[#151515] font-bold">What Customer Says</h2>
            <p className="text-center text-[#737373] lg:px-[250px]">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <div className="grid grid-cols-1 px-3 md:grid-cols-2 items-center gap-10 mt-10 rounded-md">
                <div className="md:p-10 border relative p-5">
                    <div className="flex items-center gap-5">
                        <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/9yxnvmG/joshua-rawson-harris-P2x-O3-EIk15-E-unsplash.jpg" alt="" />
                        <div >
                            <h2 className="font-bold text-2xl text-[#444]">Awlad Hossain</h2>
                            <p className="text-[#737373]">Businessman</p>
                        </div>
                    </div>
                    <p className="text-[#737373] mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="flex items-center mt-4 gap-1">
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                    </div>
                    <img className="w-10 absolute top-10 lg:right-32 right-5" src={quote} alt="" />
                </div>
                <div className="md:p-10 p-5 border relative">
                    <div className="flex items-center gap-5">
                        <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/9yxnvmG/joshua-rawson-harris-P2x-O3-EIk15-E-unsplash.jpg" alt="" />
                        <div >
                            <h2 className="font-bold text-2xl text-[#444]">Awlad Hossain</h2>
                            <p className="text-[#737373]">Businessman</p>
                        </div>
                    </div>
                    <p className="text-[#737373] mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <div className="flex items-center mt-4 gap-1">
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                        <FaStar className="text-xl text-[#FF912C]"></FaStar>
                    </div>
                    <img className="w-10 absolute top-10 lg:right-32 right-5" src={quote} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Customer;