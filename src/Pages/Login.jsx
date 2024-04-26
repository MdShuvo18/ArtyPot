
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Login = () => {
    const auth = getAuth(app)
    const googleprovider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const { signIn } = useContext(AuthContext)
    const [logUser, setLogUser] = useState('');
    const [success, setSuccess] = useState('');
    const [showPasswords, setShowPasswords] = useState(false);
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        // e.preventDefault()
        signInWithPopup(auth, googleprovider)
            .then(() => {
                toast.success("Google Login successfully")
                window.location.href = "/"
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleGithubSignIn = () => {
        // e.preventDefault()
        signInWithPopup(auth, gitHubProvider)
            .then(() => {
                toast.success("Github Login successfully")
                window.location.href = '/';
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        // console.log(email, password)
        setLogUser('');
        setSuccess('');

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters')
            setSuccess(<p className="text-red-700">Password must be at least 6 characters or longer</p>);
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one UpperCase characters')
            setSuccess(<p className="text-red-700">Password must be at least one UpperCase characters</p>);
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one LowerCase characters')
            setSuccess(<p className="text-red-700">Password must be at least one lowerCase characters</p>);
            return;
        }

        signIn(email, password)
            .then(() => {
                // console.log(result.user)
                toast.success("login success")
                // setSuccess('Login Successful')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error("Invalid mail or password")
            })
    }


    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
                <Navbar></Navbar>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-purple-800 font-bold animate__animated  animate__swing">Login now</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">
                        <form onSubmit={handleLogIn} className="p-6">
                            <div className="form-control animate__animated  animate__bounceInLeft">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative animate__animated  animate__bounceInRight">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input

                                    type={showPasswords ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />

                                <span className="absolute top-14 right-7" onClick={() => { setShowPasswords(!showPasswords) }}>
                                    {
                                        showPasswords ? <IoEye /> : <IoMdEyeOff />
                                    }
                                </span>


                            </div>
                            <div className="form-control mt-6 animate__animated animate__heartBeat">
                                <button className="btn mb-2 btn-primary bg-green-700 text-black border-none font-extrabold">Login</button>
                            </div>

                            <button data-aos="flip-right" data-aos-duration="1000" onClick={handleGoogleSignIn} className="btn animate__animated  animate__bounceInRight btn-outline w-full mb-2 ">
                                <FaGoogle></FaGoogle>
                                <span className="ml-2">Login With Google</span>
                            </button>
                            <button data-aos="flip-right" data-aos-delay="500" onClick={handleGithubSignIn} className="btn animate__animated  animate__bounceInLeft btn-outline w-full">

                                <FaGithub />
                                <span className="ml-2">Login With Github</span>
                            </button>
                        </form>




                        {
                            logUser && <p className="text-lg text-center text-red-700">{logUser}</p>
                        }
                        {

                            success && <p className="text-lg text-center text-green-700">{success}</p>
                        }
                        <p className="text-center p-2">Do not have an account? <Link to='/register' className="text-blue-700">Register</Link></p>
                    </div>
                </div>

            </div>
            <ToastContainer position="top-right" autoClose="2000"></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Login;