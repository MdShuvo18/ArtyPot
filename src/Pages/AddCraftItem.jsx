import Footer from "./Footer";
import Navbar from "./Navbar";


const AddCraftItem = () => {

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
        const User_Email = form.User_Email.value;
        const User_Name = form.User_Name.value;

        const addItemValue = { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, User_Email, User_Name }
        console.log(addItemValue);
    }

    return (
        <div className="space-y-5">
            <Navbar></Navbar>
            <h1 className="text-4xl font-extrabold text-center">Add Craft Items</h1>
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
                                <div className="">
                                    <span className="label-text">subcategory Name</span>
                                </div>
                                <input type="text" placeholder="subcategory Name" name="subcategory_Name" className="input input-bordered w-full max-w-xs" />
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
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">stockStatus</span>
                                </div>
                                <input type="text" placeholder="example- In stock, Made to Order" name="stockStatus" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">User Email</span>
                                </div>
                                <input type="email" placeholder="User Email"
                                    name="User_Email" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                    </div>
                    {/* 6th */}
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <label className="form-control w-full">
                                <div className="">
                                    <span className="label-text">User Name</span>
                                </div>
                                <input type="text" placeholder="User Name"
                                    name="User_Name" className="input input-bordered w-full " />
                            </label>
                        </div>

                    </div>

                    <button className="btn btn-success w-3/4 md:w-2/3 lg:w-2/5 ml-14 md:ml-6 lg:ml-10">Add Item</button>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddCraftItem;