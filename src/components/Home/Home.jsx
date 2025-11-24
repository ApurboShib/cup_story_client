import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState, useEffect } from "react";


const Home = () => {

  // here we use useLoaderData() to get the data from the loaalhost and from the main.jsx we 
  // use loader function to get the data from the localhost.
  // const data = useLoaderData();
  // console.log(data);


  // instade of this is want to useEffect and async function to get the data from the localhost.

  // loading state
  const [loading, setLoading] = useState(false);
  // data state 
  const [data, setData] = useState([]);
  // error state
  const [error, setError] = useState(null);
  // use useEffect to get the data from the localhost, and use async function to get the data from the localhost.
  // use setLoading(true) to show the loading state, and setLoading(false) to hide the loading state.
  // use setError(null) to show the error state, and setError(error) to hide the error state.
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/coffees");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {
        data.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
    </div>
  );
};

export default Home;
