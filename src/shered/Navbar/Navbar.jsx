import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthPrivider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext)

    const handleLogout = () => {
        userLogOut()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Successful logout',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Good job!',
                    error.message,
                    'error'
                )
            })
    }


    const ulLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        <li>{user ? <button onClick={handleLogout}>logout</button> : <Link to={'/login'}>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-[#444] text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLink
                        }
                    </ul>
                </div>
                <div>
                    <img className="w-20" src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#444] text-lg">
                    {
                        ulLink
                    }
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <FaShoppingBag className="text-lg"></FaShoppingBag>
                <FaSearch className="text-lg"></FaSearch>
                <a className="btn text-[#FF3811] btn-outline btn-warning ">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;