import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoadCraftitem from "./LoadCraftitem";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet";
import { useState } from "react";
import MyCategorySection from "../components/MyCategorySection";
import ExtraSection from "./ExtraSection";


const Home = () => {
    const loadCraftItems = useLoaderData();
    const [visible, setVisible] = useState(6)
    const handleShowMore = () => {
        setVisible(prev => prev + 6)
    }

    return (
        <div  className="space-y-10">
            <Helmet>
                <title>Home - This is Home page</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1 className="animate__animated  animate__rotateIn text-4xl font-extrabold text-center text-red-300">Craft Items Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center gap-5 h-full">
                {
                    loadCraftItems.slice(0, visible).map((craftItem) => <LoadCraftitem key={craftItem._id} craftItem={craftItem}></LoadCraftitem>)
                }
                {
                    loadCraftItems.length > visible && (
                
                          <a onClick={handleShowMore} href="#_" className=" relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Show More</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                   
                    )
                }
            </div>
            <ExtraSection></ExtraSection>
            <MyCategorySection></MyCategorySection>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;