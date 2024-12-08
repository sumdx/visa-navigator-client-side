import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../Components/VisaCard";

const AllVisa = () => {
  const newVisas = useLoaderData();
  const [visas, updateVisas] = useState(newVisas);

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
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
          <h1 className="text-center text-white text-6xl font-bold py-20">
            All Visa Pages
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-10 mt-10 mx-auto">
        {visas.length > 0 &&
          visas.map((visa) => <VisaCard visa={visa}></VisaCard>)}
      </div>
    </div>
  );
};

export default AllVisa;
