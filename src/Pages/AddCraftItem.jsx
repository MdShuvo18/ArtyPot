import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { Helmet } from "react-helmet";


const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const handleAddCraftItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const User_Name = form.User_Name.value;

        const addItemValue = { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, email, User_Name }
        console.log(addItemValue);
        fetch('http://localhost:5000/addCraftItem', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addItemValue),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

    }

    return (
        <div className="space-y-5">
            <Helmet>
               
                <title>Add Craft Item - This is Add Craft Item Page</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-4xl font-extrabold text-center text-fuchsia-300">Add Craft Items</h1>
            <div>
                <form onSubmit={handleAddCraftItem} className="md:ml-[150px] lg:ml-[530px] space-y-4">
                    {/* 1st */}
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">image
                                    </span>
                                </div>
                                <input type="text" placeholder="image url" name="image" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">item name</span>
                                </div>
                                <input type="text" placeholder="itemname" name="item_name" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div>
                                    <label className="form-control w-full">
                                        <div className="">
                                            <span className="label-text">stockStatus</span>
                                        </div>
                                        <input type="text" placeholder="example- In stock, Made to Order" name="stockStatus" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                               
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">short description
                                    </span>
                                </div>
                                <input type="text" placeholder="short description" name="short_description" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/*3rd  */}
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">price</span>
                                </div>
                                <input type="text" placeholder="price" name="price" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">rating</span>
                                </div>
                                <input type="text" placeholder="rating" name="rating" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">customization</span>
                                </div>
                                <input type="text" placeholder="example- yes, no"
                                    name="customization" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">processing time</span>
                                </div>
                                <input type="text" placeholder="processing time"
                                    name="processing_time" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/* 5th */}
                    <div className="flex flex-row gap-4 ">
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">User Name</span>
                                </div>
                                <input defaultValue={user.displayName}
                                    type="text" placeholder="User Name"
                                    name="User_Name" className="input input-bordered w-full " />
                            </label>
                        </div>

                    </div>
                       
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">User Email</span>
                                </div>
                                <input defaultValue={user.email} type="email" placeholder="User Email"
                                    name="email" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/* 6th */}
                    
                    <div className="w-2/5">
                            <span className="label-text">subcategory Name</span>
                            <select name="subcategory_Name" className="input input-bordered w-full ">
                                <option value="Clay made pottery">Clay made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>
                        </div>

                    <button className="btn btn-success text-white w-3/4 md:w-2/3 lg:w-2/5 ml-14 md:ml-6 lg:ml-10">Add</button>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddCraftItem;