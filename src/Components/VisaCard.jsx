import React from "react";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl h-full">
        <figure className="px-10 pt-10 h-48 ">
          <img
            src={visa.countryImage}
            alt="Flags"
            className="rounded-xl h-full object-fill"
          />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title text-2xl">{visa.countryName}</h2>
          <p >Fees : ${visa.fees} USD</p>
          <p>Validity : {visa.validity} Months</p>
          <p className="font-bold">Required Document:</p>
          <ul className="list-disc h-26 flex flex-col ">
            {
                visa.requiredDocuments.map(doc => <li className="ml-4"> {doc}</li>)
            }
          </ul>

          <div className="card-actions items-center flex">
            <Link to={`/visas/${visa._id}`} className="w-full"><button className="btn w-full btn-primary">View Details</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
