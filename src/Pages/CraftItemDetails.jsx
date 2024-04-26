import { useLoaderData, useParams } from "react-router-dom";


const CraftItemDetails = () => {
    const itemDetails = useLoaderData()
    const { id } = useParams()
    const idInt=parseInt(id)

    const itemDetail = itemDetails.find(itemDetail => itemDetail._id === idInt)
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={itemDetail.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CraftItemDetails;