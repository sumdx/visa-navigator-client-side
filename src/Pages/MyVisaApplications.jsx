import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ApplicationCard from "../Components/ApplicationCard";

const MyVisaApplications = () => {
    
const { user, loading } = useContext(AuthContext);
    const [myApplications,updateMyApplication] = useState([]);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:3000/applications?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        updateMyApplication(data);
      });
  }, []);


  return (
    <div>
      <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">My Visa Applications</h1>
          <p className="text-lg">
            All your Application will reflects here
          </p>
        </div>
      </div>
      </div>
      <div className="container mx-auto mt-10 mb-10 grid grid-cols-2 gap-8">
        {
            myApplications.map(visa =>{
                return <ApplicationCard visa={visa}></ApplicationCard>
            })
        }

      </div>
    </div>
  );
};

export default MyVisaApplications;
