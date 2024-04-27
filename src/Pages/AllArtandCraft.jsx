import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



const AllArtandCraft = () => {
    const allArtandCraft = useLoaderData()
    console.log(allArtandCraft);



    return (
        <div>
            <Navbar></Navbar>
            <div>
                {/* {
                    allArtandCraft.map(artCraft => <LoadAllcraftItem key={artCraft._id} artCraft={artCraft}></LoadAllcraftItem>)
                } */}

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            allArtandCraft.map(allArtandCraftItem=>(
                                <tr key={allArtandCraftItem._id}>
                                    <td>
                                        <img className="w-[200px] h-[200px]" src={allArtandCraftItem.image} alt="" />
                                    </td>
                                    <td>{allArtandCraftItem.item_name}</td>
                                    <td>{allArtandCraftItem.subcategory_Name}</td>
                                    <td>{allArtandCraftItem.short_description}</td>
                                   <Link to={`/craftItemDetails/${allArtandCraftItem._id}`}> <td >View Details</td></Link>
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