import { useEffect, useState } from "react";


const MyCategorySection = () => {
    const [loadCatetgory, setCategory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allArtandCraft")
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

    }, [])
    console.log(loadCatetgory)
    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-extrabold text-red-400 text-center">Ceramics and Pottery Category section Here</h1>
            <div className="grid grid-cols-2 justify-items-center gap-5">
                {
                    loadCatetgory.map(category => <div key={category._id}>
                        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                            <img src={category.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <span className="block text-lg font-bold tracking-widest uppercase dark:text-violet-600">{category.subcategory_Name}</span>
                                
                            </div>
                            <p className="dark:text-gray-800">{category.short_description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCategorySection;