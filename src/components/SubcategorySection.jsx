
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Link, useLoaderData } from "react-router-dom";


const SubcategorySection = () => {
    const loadData = useLoaderData()
    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, email, User_Name } = loadData;
    console.log(loadData);
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <div className="grid  lg:grid-cols-2 justify-items-center gap-5">
                {
                    loadData.map(item => <div key={item._id}>
                        <div className="card w-96 bg-red-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl font-extrabold">{item.item_name}</h2>
                                <h1 className="text-lg font-bold">{item.subcategory_Name}</h1>
                                <p>{item.short_description}</p>
                                <div className="flex gap-8">
                                    <p><span className="font-bold text-red-600">Price</span> : {item.price}</p>
                                    <p><span className="font-bold text-red-600">Rating</span> : {item.rating}</p>
                                </div>
                                <p><span className="font-semibold text-green-950">Processing time</span> : {item.processing_time}</p>


                                <Link to={`/subCategoryViewDetails/${item._id}`}>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </Link>


                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SubcategorySection;