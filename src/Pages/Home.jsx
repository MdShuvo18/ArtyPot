import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoadCraftitem from "./LoadCraftitem";
import Blog from "../components/Blog";


const Home = () => {
    const loadCraftItems = useLoaderData();

    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 h-full">
                {
                    loadCraftItems.map((craftItem) => <LoadCraftitem key={craftItem._id} craftItem={craftItem}></LoadCraftitem>)
                }

            </div>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;