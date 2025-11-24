import React from "react";
import Swal from 'sweetalert2';


const Header = () => {
  const HandleAddCoffee = (e) => {
    e.preventDefault();

    //   this is the basic and lengthy way to get form data(but this is not more safer for larger form )
    // const name = e.target.name.value;
    // const chef = e.target.chef.value;
    // const supplier = e.target.supplier.value;
    // const taste = e.target.taste.value;
    // const category = e.target.category.value;
    // const details = e.target.details.value;
    // const photoUrl = e.target.photoUrl.value;

    // const newCoffee = {
    //   name,
    //   chef,
    //   supplier,
    //   taste,
    //   category,
    //   details,
    //   photoUrl,
    // };

    // this is the more better way to get the form data using FormData API. and this is more safer for larger form
    const form = e.target;
    const formData = new FormData(form);
    //console.log(formData.entries());
    const newCoffeeData = Object.fromEntries(formData.entries());
    console.log(newCoffeeData);

    // send the to the server(DB)

    fetch("http://localhost:8080/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(" fetch data from server : ", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true
          });
        }
      });
  };
  return (
    <div className="p-6 md:p-16 lg:p-24">
      <div className="mb-10 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Add New Coffee
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-base-content/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quia
          deleniti. Tempore ullam repellat corrupti quo ipsa temporibus
          distinctio nobis. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <form onSubmit={HandleAddCoffee} className="max-w-3xl mx-auto space-y-6">
        {/* Two-column grid for main fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee name"
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee chef"
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee quantity"
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee taste"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee price"
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Coffee details"
            />
          </div>
        </div>

        {/* Photo URL - full width */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            className="w-full border border-base-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
            placeholder="Coffee photo URL"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default Header;
