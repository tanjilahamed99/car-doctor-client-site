import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={banner1} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={banner2} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={banner3} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={banner4} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px]">
                <img src={banner5} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px]">
                <img src={banner6} className="w-full" />
                <div className='  bg-gradient-to-r from-[#151515] left-0 top-0 w-full  h-full to-[rgba(21, 21, 21, 0.00)] absolute  pl-5 md:pl-20'>
                    <div className='space-y-4 md:w-1/2 text-white mt-[180px]'>
                        <h2 className='font-bold md:text-5xl text-4xl'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <button className='btn bg-[#FF3811] text-white  w-fit border-none'>Discover More</button>
                            <button className='btn w-fit'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end md:bottom-10 gap-5 md:right-10 bottom-4 right-2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;