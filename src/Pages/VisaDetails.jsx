import React, { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const buttonRef = useRef(null);
  const { user } = useContext(AuthContext);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const day = String(today.getDate()).padStart(2, "0"); // Ensure 2-digit day

  const todaysDate = `${year}-${month}-${day}`;

  const {
    _id,
    countryName,
    countryImage,
    description,
    processingTime,
    visaType,
    validity,
    fees,
    ageRestriction,
    requiredDocuments,
    applicationMethod,
  } = useLoaderData();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const apliedDate = todaysDate;

    const email = user.email;

    const applicationData = {
      countryName,
      countryImage,
      visaType,
      processingTime,
      fees,
      validity,
      applicationMethod,
      apliedDate,
      firstName,
      lastName,
      email  
    };

    fetch("https://b10-a10-server-side-sumdx.vercel.app/applications",{

        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(applicationData)

    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            buttonRef.current.click();
            Swal.fire({
                title: 'Success!',
                text: 'Visa Information Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              
        }else{
            Swal.fire({
                title: 'Success!',
                text: 'Visa Information Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
        
    })
  };

  return (
    <div>
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
        <h1 className="text-center text-4xl font-bold py-20">
          Visa Details Page
        </h1>
      </div>
      <div className="container mx-auto  rounded-xl bg-orange-100 my-14">
        <div className="p-10 flex gap-6">
          <div className="w-1/2 bg-white p-4 rounded-xl">
            <img src={countryImage}></img>
          </div>
          <div className="w-1/2 text-center flex flex-col justify-between">
            <h2 className="text-xl font-light">Visa Details of</h2>
            <h1 className="text-4xl font-bold">{countryName}</h1>
            <div className="flex text-left justify-around mt-6">
              <h2>
                <span className="font-bold">Visa Processing Time : </span>
                {processingTime} Days
              </h2>
              <h2>
                <span className="font-bold"> Visa Validity : </span>
                {validity} Months
              </h2>
            </div>
            <div className="flex text-left justify-around mt-6">
              <h2>
                <span className="font-bold">Visa type : </span>
                {visaType}{" "}
              </h2>
              <h2>
                <span className="font-bold"> Visa Fees : </span>${fees} USD{" "}
              </h2>
            </div>
            <p className="mt-6">
              <span className="font-bold">Description : </span>
              {description}
            </p>
            <h1 className="mt-6  font-bold">Required Documents:</h1>
            <ol className="">
              {requiredDocuments.map((visa) => (
                <li>* {visa}</li>
              ))}
            </ol>
            <h2 className="mt-6">
              <span className="font-bold ">Age Restriction : </span> Applicant
              upto {ageRestriction} years old can apply.
            </h2>
            <button
              onClick={() => document.getElementById(`${_id}`).showModal()}
              className="btn bg-white w-full mt-6 rounded-lg py-4"
            >
              Apply Now
            </button>
          </div>
          {/* Modal */}

          <dialog id={_id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <form
                onSubmit={handleApply}
                method="dialog"
                action=""
                className="space-y-4"
              >
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Your Email</span>
                  </div>
                  <input
                    type="email"
                    name="userEmail"
                    placeholder={user.email}
                    value={user.email}
                    className="input input-bordered w-full max-w-xs"
                    required
                    disabled
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Apply Date</span>
                  </div>
                  <input
                    type="date"
                    name="appliedDate"
                    value={todaysDate}
                    placeholder="Enter Your Last Name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Fees</span>
                  </div>
                  <input
                    type="text"
                    name="fees"
                    value={fees}
                    className="input input-bordered w-full max-w-xs"
                    required
                    disabled
                  />
                </label>

                <button className="btn" type="submit">
                  Apply Visa
                </button>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button ref={buttonRef} className="btn text-center justify-center">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
