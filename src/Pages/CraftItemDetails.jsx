import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const CraftItemDetails = () => {
    const itemDetails = useLoaderData()
    // console.log(itemDetails)
    const { id } = useParams()
    console.log(id)

    const itemDetail = itemDetails.find(item => item._id === id)
    console.log(itemDetail)


    return (
        <div className="space-y-5">
            <Navbar></Navbar>
            <div data-aos="flip-up" className="grid justify-items-center">
                <div className="card w-96  bg-sky-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={itemDetail.image} alt="Shoes" className="w-full h-[350px] rounded-xl" />
                    </figure>

                    <div className="flex justify-between mt-2">
                        <h1 className="ml-10 animate__animated  animate__bounceInRight"><span className="text-red-600">Price :</span> {itemDetail.price}</h1>
                        <h2 className="mr-10 animate__animated  animate__bounceInLeft"><span className="text-red-600">Rating :</span> {itemDetail.rating}</h2>
                    </div>
                    <div className="card-body items-center text-center">
                        <p className="animate__animated  animate__bounceInRight">{itemDetail.subcategory_Name}</p>
                        <h2 className="card-title animate__animated  animate__bounceInLeft">{itemDetail.item_name}</h2>
                        <p className="animate__animated  animate__bounceInRight">{itemDetail.short_description}</p>


                        <div className="flex gap-6">
                            <p className="font-semibold text-black animate__animated  animate__bounceInRight">Customization: {itemDetail.customization}</p>
                            <h1 className="font-semibold text-black animate__animated  animate__bounceInLeft">Stock status: {itemDetail.stockStatus}</h1>
                        </div>


                        <h1  className="text-lg font-semibold text-black animate__animated  animate__bounceInRight"><span className="text-red-500">Processing time:</span>{itemDetail.processing_time}</h1>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CraftItemDetails;