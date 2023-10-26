import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import Navbar from '../../shered/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../AuthPrivider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase-config';
import Swal from 'sweetalert2';
const SignUp = () => {

    const { crateUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(email, password, name)

        crateUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        console.log('update dane')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                Swal.fire(
                    'Good job!',
                    'Successful create account',
                    'success'
                )
            })
            .catch(error => {
                console.log(error.message)
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
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                            <p>Already have account? <Link to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;