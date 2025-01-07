import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import ApplicationCard from "../Components/ApplicationCard";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [myApplications, updateMyApplication] = useState([]);
  const [originalApplications, setOriginalApplications] = useState([]);
  const [isData, updateData] = useState(true);
  const email = user.email;

  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-sumdx.vercel.app/applications?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
        console.log(res)
      .then((data) => {
         console.log(data)
        updateMyApplication(data);
        setOriginalApplications(data); 
      });
  }, [email]);

  const searchHandle = (e) => {
    const search = e.target.value.toLowerCase();
    
    if (search === "") {
      updateMyApplication(originalApplications);
      updateData(true);
    } else {
      const filtered = originalApplications.filter((visa) =>
        visa.countryName.toLowerCase().includes(search)
      );
      if (filtered.length === 0) {
        updateData(false); 
      } else {
        updateData(true);
      }
      updateMyApplication(filtered);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-4">My Visa Applications</h1>
            <p className="text-lg">All your applications will be reflected here</p>
          </div>
        </div>
      </div>
      <div className="container w-1/2 mt-4 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="search"
            onChange={searchHandle} 
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {!isData && (
        <div>
          <h1 className="text-4xl text-center mt-10">No data found</h1>
        </div>
      )}
      <div className="container mx-auto mt-10 mb-10 grid grid-cols-2 gap-8">
        {myApplications.map((visa) => {
          return (
            <ApplicationCard
              key={visa.id} 
              visa={visa}
              myApplications={myApplications}
              updateMyApplication={updateMyApplication}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyVisaApplications;
