import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const MyCategorySection = () => {
    const [loadCatetgory, setCategory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/allArtandCraft")
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

    }, [])



    const handlecategory = (_id) => {
        navigate(`/subcategorysection/${_id}`)
    }
    // console.log(loadCatetgory)
    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-extrabold text-red-400 text-center">Ceramics and Pottery Category section Here</h1>
            <div className="  grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
                {
                    loadCatetgory.map(category =>
                        <div onClick={() => handlecategory(category.subcategory_Name)} key={category._id}>
                            <div data-aos="fade-down-right" className="max-w-xs h-full p-6 rounded-md shadow-md bg-indigo-200 dark:text-gray-900">
                                <img src={category.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className="mt-6 mb-2">
                                    <span className="block text-emerald-700 text-lg font-extrabold tracking-widest uppercase dark:text-violet-600">{category.subcategory_Name}</span>

                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyCategorySection;