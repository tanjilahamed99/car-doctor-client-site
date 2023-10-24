import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
const Team = () => {
    return (
        <div className='my-32'>
            <p className="text-[#FF3811] text-xl text-center font-bold">Team</p>
            <h2 className="text-center my-3 text-4xl text-[#151515] font-bold">Meet Our Team</h2>
            <p className="text-center text-[#737373] lg:px-[250px] mb-10">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 items-center justify-center" >
                <div className='text-center'>
                    <img className='w-[300px] h-[250px] mx-auto' src={team1} alt="" />
                    <h2 className='font-bold text-xl text-[#444] mt-4'>Car Engine Plug</h2>
                    <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                    <div className="flex items-center gap-3 justify-center mt-3">
                        <FaFacebook className="text-xl"></FaFacebook>
                        <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                        <FaInstagram className="text-xl"></FaInstagram>
                        <FaLinkedin className="text-xl"></FaLinkedin>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='w-[300px] h-[250px] mx-auto' src={team2} alt="" />
                    <h2 className='font-bold text-xl text-[#444] mt-4'>Car Engine Plug</h2>
                    <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                    <div className="flex items-center gap-3 justify-center mt-3">
                        <FaFacebook className="text-xl"></FaFacebook>
                        <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                        <FaInstagram className="text-xl"></FaInstagram>
                        <FaLinkedin className="text-xl"></FaLinkedin>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='w-[300px] h-[250px] mx-auto' src={team3} alt="" />
                    <h2 className='font-bold text-xl text-[#444] mt-4'>Car Engine Plug</h2>
                    <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                    <div className="flex items-center gap-3 justify-center mt-3">
                        <FaFacebook className="text-xl"></FaFacebook>
                        <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                        <FaInstagram className="text-xl"></FaInstagram>
                        <FaLinkedin className="text-xl"></FaLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;