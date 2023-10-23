import logo from "../../assets/logo.svg"
import { FaGoogle, FaTwitterSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515] text-white ">
            <aside className="space-y-2">
                <img className="w-20" src={logo} alt="" />
                <p>
                    Edwin Diaz is a software and web technologies <br /> engineer, a life coach <br /> trainer who is also a serial .
                </p>
                <div className="flex items-center gap-3">
                    <FaGoogle className="text-xl"></FaGoogle>
                    <FaTwitterSquare className="text-xl"></FaTwitterSquare>
                    <FaInstagram className="text-xl"></FaInstagram>
                    <FaLinkedin className="text-xl"></FaLinkedin>
                </div>
            </aside>
            <nav className="">
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="">
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="">
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;