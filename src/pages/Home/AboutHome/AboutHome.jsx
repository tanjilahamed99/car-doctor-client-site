import about from '../../../assets/images/about_us/person.jpg'
import part from '../../../assets/images/about_us/parts.jpg'
const AboutHome = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div className='md:w-1/2 mx-auto relative'>
                        <img src={about} className=" md:w-[420px] md:h-[400px] w-[350px] h-[350px] mx-auto" />
                        <img className='absolute lg:w-[300px] lg:h-[300px] w-[200px] h-[200px]   -bottom-20 -right-10 lg:-right-0  border-2' src={part} alt="" />
                    </div>
                    <div className='lg:w-1/2 text-center lg:text-start '>
                        <p className='text-[#FF3811] text-xl font-bold mb-5'>About us</p>
                        <h1 className="md:text-5xl text-4xl font-bold text-[#151515] ">We are qualified & of experience in this field</h1>
                        <p className="py-6 text-[#737373]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                        <p className="pb-6 text-[#737373]">
                            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                        <button className="btn btn-primary bg-[#FF3811] border-none text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;