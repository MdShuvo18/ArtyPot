import { Link } from "react-router-dom";


const LoadCraftitem = ({ craftItem }) => {
    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, email, User_Name } = craftItem;
    // console.log(craftItem);
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{item_name}</h2>
                        <p className="dark:text-gray-800">{short_description}</p>
                    </div>
                    <Link to={`/craftItemDetails/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LoadCraftitem;