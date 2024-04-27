import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";


const MyArtandCraftList = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)
  

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.
            email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [user])
    return (
        <div>
            <Navbar></Navbar>
            <div>
              ok
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyArtandCraftList;