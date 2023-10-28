import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import Navbar from '../../shered/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../AuthPrivider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { user: email }

        loginUser(email, password)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Successful login',
                    'success'
                )
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(() => {
                        location.state ? navigate(location.state) : navigate('/')
                    })

            })
            .catch(error => {
                Swal.fire(
                    'Good job!',
                    error.message,
                    'error'
                )
            })


    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>new here? <Link to={'/signUp'}>Create account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;