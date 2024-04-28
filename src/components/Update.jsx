import { useLoaderData } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Update = () => {
    const updateItem = useLoaderData();
    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus} = updateItem;

    const handleUpdateCraftItem = (e) => {
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
       

        const updatedItemValue = { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus}
        console.log(updatedItemValue);
        fetch(`http://localhost:5000/addCraftItem/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItemValue),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

    }


    return (
        <div className="space-y-10">
            <Helmet>
                <title>Update Craft Item - This is Update Craft Item page</title>
            </Helmet>
            <Navbar></Navbar>

            <div>
                <div className="space-y-5">

                    <h1 className="text-4xl font-extrabold text-purple-400 text-center">Update Art & Craft Item</h1>
                    <div>
                        <form onSubmit={handleUpdateCraftItem} className="md:ml-[150px] lg:ml-[530px] space-y-4">
                            {/* 1st */}
                            <div className="flex flex-row gap-4 ">
                                <div>
                                    <label className="form-control w-full">
                                        <div className="">
                                            <span className="label-text">image
                                            </span>
                                        </div>
                                        <input type="text" placeholder="image url" name="image" defaultValue={image} className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                                <div>
                                    <label className="form-control w-full">
                                        <div className="">
                                            <span className="label-text">item name</span>
                                        </div>
                                        <input type="text" placeholder="itemname" name="item_name" defaultValue={item_name} className="input input-bordered w-full max-w-xs" />
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
                                                <input type="text" placeholder="example- In stock, Made to Order" name="stockStatus" defaultValue={stockStatus} className="input input-bordered w-full max-w-xs" />
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
                                        <input type="text" placeholder="short description" name="short_description" defaultValue={short_description} className="input input-bordered w-full max-w-xs" />
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
                                        <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                                <div>
                                    <label className="form-control w-full">
                                        <div className="">
                                            <span className="label-text">rating</span>
                                        </div>
                                        <input type="text" placeholder="rating" name="rating" defaultValue={rating} className="input input-bordered w-full max-w-xs" />
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
                                            name="customization" defaultValue={customization} className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                                <div>
                                    <label className="form-control w-full">
                                        <div className="">
                                            <span className="label-text">processing time</span>
                                        </div>
                                        <input type="text" placeholder="processing time"
                                            name="processing_time" defaultValue={processing_time} className="input input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                            </div>
                            {/* 5th */}

                            {/* 6th */}

                            <div className="w-2/5">
                                <span className="label-text">subcategory Name</span>
                                <select name="subcategory_Name" defaultValue={subcategory_Name} className="input input-bordered w-full ">
                                    <option value="Clay made pottery">Clay made pottery</option>
                                    <option value="Stoneware">Stoneware</option>
                                    <option value="Porcelain">Porcelain</option>
                                    <option value="Terra Cotta">Terra Cotta</option>
                                    <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                    <option value="Home decor pottery">Home decor pottery</option>
                                </select>
                            </div>

                            <button className="btn text-white btn-success w-3/4 md:w-2/3 lg:w-2/5 ml-14 md:ml-6 lg:ml-10">Update</button>
                        </form>
                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Update;