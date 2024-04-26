import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;