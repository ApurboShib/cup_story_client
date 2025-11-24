import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, quantity, photoUrl } = coffee;
    const fallbackPhoto = "https://placehold.co/400";


    // for fixing the image link, because the image link is not working
    // so we set a condition to check if the image link is working or not
    // if the image link is not working then we will show the fallback image
    // if the image link is working then we will show the image
    // this is a function to fix the image link
    const fixImageLink = (url) => {
        if (!url) return null;
        if (url.includes("ibb.co.com")) {
            const parts = url.split('/');
            const id = parts[parts.length - 1];
            return `https://i.ibb.co/${id}/image.jpg`;
        }
        return url;
    };

    const displayPhoto = fixImageLink(photoUrl);


    // here we write the delete script.

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed);

            // start deleting the coffee.
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("after deleting the data", data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting coffee:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete coffee.",
                            icon: "error"
                        });
                    });
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 rounded-2xl overflow-hidden group">
            <figure className="w-2/5 relative overflow-hidden">
                <img
                    src={displayPhoto || fallbackPhoto}
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackPhoto; }}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </figure>
            <div className="card-body w-3/5 p-8 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-3xl font-bold text-gray-800 tracking-tight">{name}</h2>
                        <div className="badge badge-secondary badge-outline p-3 font-medium">{coffee.category || 'Coffee'}</div>
                    </div>
                    <div className="space-y-2 text-gray-600">
                        <p className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800 w-20">Price:</span>
                            <span className="text-lg text-primary font-bold">{price} Taka</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800 w-20">Quantity:</span>
                            <span>{quantity}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800 w-20">Taste:</span>
                            <span className="italic">{coffee.taste}</span>
                        </p>
                    </div>
                </div>
                <div className="card-actions justify-end mt-6">
                    <div className=" flex justify-around join bg-base-200 p-1 rounded-lg">
                        <Link to={`/coffee/${_id}`}><button className="btn btn-sm btn-ghost join-item hover:bg-white hover:text-neutral transition-colors">View</button></Link>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn btn-sm btn-ghost join-item hover:bg-white hover:text-primary transition-colors">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-ghost join-item hover:bg-white hover:text-error transition-colors">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;