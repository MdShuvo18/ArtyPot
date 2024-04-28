import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";



const AllArtandCraft = () => {
    const allArtandCraft = useLoaderData()
    console.log(allArtandCraft);



    return (
        <div className="space-y-10">
            <Helmet>
                <title>All Art and Craft - This is all Art and Craft page</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-4xl font-extrabold text-center text-green-500">All Art & Craft Items</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Name</th>
                                <th>Sub-Category Name</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allArtandCraft.map(allArtandCraftItem => (
                                    <tr key={allArtandCraftItem._id}>
                                        <td>
                                            <img className="w-[100px] h-[100px] border rounded-full" src={allArtandCraftItem.image} alt="" />
                                        </td>
                                        <td>{allArtandCraftItem.item_name}</td>
                                        <td>{allArtandCraftItem.subcategory_Name}</td>
                                        <td>{allArtandCraftItem.email}</td>
                                        <td ><Link to={`/craftItemDetails/${allArtandCraftItem._id}`}>View Details</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllArtandCraft;