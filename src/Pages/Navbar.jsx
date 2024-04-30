import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [hoverName, setHoverName] = useState("")
    useEffect(() => {
        if (user) {
            setHoverName(user.displayName)
        } else {
            setHoverName("")
        }
    }, [user])

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Sign out successfully")
            })
            .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtandCraftsItem'>All Art & craft Items</NavLink></li>
        {
            user && <>
                <li><NavLink to='/AddCraftItem'>Add Craft Item</NavLink></li>

                <li><NavLink to='/MyArtandCraftList'>My Art & Craft List</NavLink></li>
            </>
        }
    </>
    return (
        <div data-aos="flip-down" data-aos-duration="1000" className="navbar bg-stone-500">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost z-10 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {/* <img className="rounded-full w-6 h-6" src="https://i.ibb.co/6m3c07Q/images.png" alt="" /> */}
                <a className="animate__animated animate__flash btn btn-ghost text-sm lg:text-3xl font-extrabold text-purple-800" >ArtyPot</a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">

                {
                    user ? (
                        <div className="lg:tooltip" data-tip={hoverName}>
                            {
                                user.photoURL ? (

                                    <img src={user.photoURL} className="w-10 h-10 rounded-full" alt={user.displayName} />

                                ) : (
                                    <CgProfile></CgProfile>
                                )
                            }

                        </div>

                    ) : (
                        <CgProfile></CgProfile>
                    )}
                {
                    user
                        ? <button onClick={handleSignOut} className="btn btn-success bg-green-700 text-black border-none">Sign Out</button>
                        : <div>
                            <div className="flex flex-row gap-1">
                                <Link to='/login'> <button className="btn btn-success bg-green-700 text-white border-none">Login</button></Link>
                                <Link to='/register'> <button className="btn btn-success bg-green-700 text-white border-none">Register</button></Link>
                            </div>
                        </div>
                }



            </div>
            <ToastContainer position="top-right" autoClose="2000"></ToastContainer>
        </div>
    );
};

export default Navbar;