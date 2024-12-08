import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../Components/VisaCard";
import sortBy from "sort-by";

const AllVisa = () => {
  const newVisas = useLoaderData();
  const [visas, updateVisas] = useState(newVisas);
  const [sortedVisas, setSortedVisas] = useState(newVisas);

  useEffect(() => {
    fetch("http://localhost:3000/visas", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        updateVisas(data);
        setSortedVisas(data);
      });
  }, []);

  const sortByHandle = (e) =>{
    const sort = e.target.value;
    if(sort === "All"){
      setSortedVisas(visas)
    }else{
      setSortedVisas(visas.filter(visa => visa.visaType.includes(sort)))
    }
  }

  return (
    <div>
      
      <div>
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
          <h1 className="text-center text-white text-6xl font-bold py-20">
            All Visa Pages
          </h1>
        </div>
      </div>
      <div className="container mx-auto w-48  mt-10 mb-6">
        <label className="block text-lg font-medium mb-2">Filter by Visa Type:</label>
        <select
          onChange={sortByHandle}
          className="w-full p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Tourist">Tourist</option>
          <option value="Student">Student</option>
          <option value="Business">Business</option>
          {/* Add more visa types as needed */}
        </select>
      </div>
      <div className="mb-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-10 mt-10 mx-auto">
        {sortedVisas.length > 0 &&
          sortedVisas.map((visa) => <VisaCard visa={visa}></VisaCard>)}
      </div>
    </div>
  );
};

export default AllVisa;
