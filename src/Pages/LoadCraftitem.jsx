import { Link } from "react-router-dom";


const LoadCraftitem = ({ craftItem }) => {
    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, email, User_Name } = craftItem;
    // console.log(craftItem);
    return (
        <div>
            <div className="w-96 h-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{item_name}</h2>
                        <p className="dark:text-gray-800">{short_description}</p>
                    </div>
                    <Link to={`/craftItemDetails/${_id}`}><a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">View Details</span>
                    </a></Link>
                </div>
            </div>
        </div>
    );
};

export default LoadCraftitem;