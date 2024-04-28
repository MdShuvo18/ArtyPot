import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// {image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, email, User_Name}

const MyArtandCraftList = () => {

    const { user } = useContext(AuthContext)

    // console.log(user)
    const [myArtandCraftList, setMyArtandCraftList] = useState([]);
    const [customizationFilter, setCustomizationFilter] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.
            email}`)
            .then(res => res.json())
            .then(data => {
                setMyArtandCraftList(data);
            })
    }, [user])

    const handleCustomization = (customization) => {
        const toLowerCase = customization.toLowerCase();
        setCustomizationFilter(toLowerCase)
    }

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addCraftItem/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });

                    })
            }
        });
    }


    return (
        <div className="space-y-5">
            <Helmet>
                
                <title>My Art and Craft List - This is my Art & Craft List page</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-4xl font-extrabold text-red-300 text-center">My Art & Craft List</h1>
            <div className="grid justify-items-center">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Customization</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleCustomization("Yes")}>Yes</button></li>
                        <li><button onClick={() => handleCustomization("No")}>No</button></li>

                    </ul>
                </div>
            </div>
            <div className="grid  lg:grid-cols-2 justify-items-center gap-8">
                {
                    myArtandCraftList.filter(item => customizationFilter === null || item.customization.toLowerCase() === customizationFilter)
                        .map(myArtandCraft => <div key={myArtandCraft._id}>
                            <div className="max-w-lg h-full   p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={myArtandCraft.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                        <div className="flex justify-between items-center text-xs">
                                            <p>Price : {myArtandCraft.price}</p>
                                            <p>Rating : {myArtandCraft.rating}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:text-violet-600">{myArtandCraft.item_name}</h3>
                                        </a>
                                        <p className="leading-snug dark:text-gray-600">{myArtandCraft.short_description}</p>

                                    </div>
                                    <div className="flex justify-between">
                                        <p>Customization : {myArtandCraft.customization}</p>
                                        <p>Stock Status : {myArtandCraft.stockStatus}</p>
                                    </div>
                                    <div className="flex justify-around">
                                        <Link to={`/updateList/${myArtandCraft._id}`}>
                                            <a href="#_" className="relative px-6 py-3 font-bold text-black group">
                                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-green-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                                <span className="relative">Update</span>
                                            </a>
                                        </Link>
                                        <a onClick={() => handleDelete(myArtandCraft._id)} href="#_" className="relative px-6 py-3 font-bold text-black group">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                            <span className="relative">Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyArtandCraftList;