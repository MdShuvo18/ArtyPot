import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const SubcategoryViewDetails = () => {
    const itemDetails = useLoaderData()
    // console.log(itemDetails)
    const { id } = useParams()
    console.log(id)

    const itemDetail = itemDetails.find(item => item._id === id)
    console.log(itemDetail)

    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <div data-aos="flip-down" className="grid grid-cols-1 justify-items-center ">
            <div className=" bg-green-200 rounded-lg max-w-lg p-4 shadow-md  dark:text-gray-800">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={itemDetail.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-row justify-center gap-44 md:gap-64 lg:gap-72">
                            <p>
                                <span className="font-bold text-red-400">Price</span> : {itemDetail.price}
                            </p>
                            <p>
                                <span className="font-bold text-red-400">Rating</span> : {itemDetail.rating}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{itemDetail.item_name}</h3>

                            <p className="text-sm font-bold">{itemDetail.subcategory_Name}</p>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{itemDetail.short_description}</p>
                    </div>
                    <h1><span className="font-extrabold text-red-500">Processing time :</span> {itemDetail.processing_time}</h1>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SubcategoryViewDetails;