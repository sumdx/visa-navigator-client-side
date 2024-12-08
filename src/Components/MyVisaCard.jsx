import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const MyVisaCard = ({ visa, deleteHandle }) => {
  const buttonRef = useRef(null);
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
    email,
    applicationMethod,
  } = visa;
 
  const handleUpdate = (e) => {
    
    e.preventDefault();
        const form = e.target;
        const requiredDocuments = Array.from(
            form.querySelectorAll('input[type="checkbox"]:checked')
          ).map((checkbox) => checkbox.value);
        const countryName = form.countryName.value;
        const countryImage = form.countryImage.value;
        const description = form.description.value;
        const processingTime = form.processingTime.value;
        const visaType = form.visaType.value;
        const applicationMethod = form.applicationMethod.value;
        const validity = form.validity.value;
        const fees = form.fees.value;
        const email = form.userEmail.value;
        const ageRestriction = form.ageRestriction.value;
        const updatedVisa = {countryName, countryImage, description, processingTime, visaType, applicationMethod, validity, fees, ageRestriction,requiredDocuments,email}
        if (requiredDocuments.length === 0) {
            alert("Please select at least one required document.");
            return; // Stop form submission
        }
       
        fetch(`https://b10-a10-server-side-sumdx.vercel.app/visas/${_id}`,{

          method : 'PUT',
          headers : {
              'content-type' : 'application/json'
          },
          body:JSON.stringify(updatedVisa)
        
      })
      .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                buttonRef.current.click();
                Swal.fire({
                    title: 'Success!',
                    text: 'Visa Information Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  form.reset();
                 
            }else{
                Swal.fire({
                    title: 'error!',
                    text: 'Visa Information Update Failed',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                  })
            }
            
        })
    
  };

  return (
    <div className="bg-white shadow-xl rounded-lg flex p-4 gap-6 justify-between">
      <div className="flex justify-center items-center gap-8">
        <div className="w-28">
          <img className="h-20 object-fill" src={countryImage} alt="" />
        </div>
        <div>
          <h1 className="font-bold font-xl">{countryName}</h1>
          <p>
            <span className="font-bold">Description:</span> {description}
          </p>
          <div className="flex gap-6">
            <p>
              <span className="font-bold">Visa Type :</span> {visaType}
            </p>
            <p>
              <span className="font-bold">Processing Time:</span>{" "}
              {processingTime} Days
            </p>
          </div>
          <div className="flex gap-6">
            <p>
              <span className="font-bold">Validity :</span> {validity} Months
            </p>
            <p>
              <span className="font-bold">Fees:</span> {fees} USD
            </p>
            <p>
              <span className="font-bold">Age Restriction:</span>{" "}
              {ageRestriction} years
            </p>
          </div>
          <p>
            <span className="font-bold">Required Document:</span>
            <span className="flex">
              {requiredDocuments.map((rd) => (
                <span> {rd}, </span>
              ))}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <button
          className="btn btn-primary"
          onClick={() => deleteHandle(visa._id)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById(`${_id}`).showModal()}
        >
          Update
        </button>
      </div>

      <dialog id={_id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className=" bg-white shadow-lg rounded-lg p-6">
            <form
              onSubmit={handleUpdate}
              method="dialog"
              action=""
              className="space-y-4"
            >
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Country Name</span>
                </div>
                <input
                  type="text"
                  name="countryName"
                  defaultValue={countryName}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Country Image</span>
                </div>
                <input
                  type="text"
                  name="countryImage"
                  defaultValue={countryImage}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Visa Type</span>
                </div>
                <select
                  name="visaType"
                  className="select select-bordered"
                  defaultValue={visaType}
                  required
                >
                  <option>Tourist Visa</option>
                  <option>Business Visa</option>
                  <option>Student Visa</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Processing Time (in Days)</span>
                </div>
                <input
                  type="number"
                  name="processingTime"
                  placeholder="Type here"
                  defaultValue={processingTime}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>

              <label htmlFor="">Required Document</label>
              <div required>
                <label className="label cursor-pointer">
                  <span className="label-text">Valid Passport</span>
                  <input
                    type="checkbox"
                    value="Valid Passport"
                    className="checkbox"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Visa Application Form</span>
                  <input
                    type="checkbox"
                    value="Visa Application Form"
                    className="checkbox"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Passport Size Photo</span>
                  <input
                    type="checkbox"
                    value="Passport Size Photo"
                    className="checkbox"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Bank Statements</span>
                  <input
                    type="checkbox"
                    value="Bank Statement"
                    className="checkbox"
                  />
                </label>

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    name="description"
                    className="textarea textarea-bordered h-32"
                    placeholder="Type Visa Description"
                    defaultValue={description}
                    required
                  ></textarea>
                </label>
              </div>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Age Restriction ( Up to Years )
                  </span>
                </div>
                <input
                  type="number"
                  name="ageRestriction"
                  defaultValue={ageRestriction}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Fees ( in USD )</span>
                </div>
                <input
                  type="number"
                  name="fees"
                  placeholder="Type Number Here"
                  defaultValue={fees}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Months (upto months)</span>
                </div>
                <input
                  type="number"
                  name="validity"
                  placeholder="Type lengths in number"
                  defaultValue={validity}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Aplication Method</span>
                </div>
                <select
                  name="applicationMethod"
                  className="select select-bordered"
                  defaultValue={applicationMethod}
                  required
                >
                  <option value="" className="select-disabled">
                    Select Application Method
                  </option>
                  <option>Online</option>
                  <option>In Person</option>
                </select>
              </label>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Your Email</span>
                  </div>
                  <input
                    type="email"
                    name="userEmail"
                    placeholder={email}
                    value={email}
                    className="input input-bordered w-full max-w-xs"
                    required
                    disabled
                  />
                </label>
                <h1>Your email will submit with he visa.</h1>
              </div>
              <button className="btn btn-accent" type="submit">Update Visa Details</button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button ref={buttonRef} className="btn btn-start">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyVisaCard;
