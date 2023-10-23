import { FaCalendarAlt,FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="my-20 flex justify-around  w-full bg-[#151515]">
            <div className="my-20 flex text-white items-center gap-4">
                <FaCalendarAlt className="text-3xl"></FaCalendarAlt>
                <div className="">
                    <h2>We are open monday-friday</h2>
                    <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="my-20 flex text-white items-center gap-4">
                <FaPhoneAlt className="text-3xl"></FaPhoneAlt>
                <div className="">
                    <h2>Have a question?</h2>
                    <p className="font-bold text-2xl">+2546 251 2658</p>
                </div>
            </div>
            <div className="my-20 flex text-white items-center gap-4">
                <FaLocationDot className="text-3xl"></FaLocationDot>
                <div className="">
                    <h2>Need a repair? our address</h2>
                    <p className="font-bold text-2xl">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;