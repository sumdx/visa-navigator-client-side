import React from "react";

const AddVisa = () => {

    const handleAddVisaSubmit =(e) =>{
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
        const ageRestriction = form.ageRestriction.value;
        
        const newVisa = {countryName, countryImage, description, processingTime, visaType, applicationMethod, validity, fees, ageRestriction,requiredDocuments}
        if (requiredDocuments.length === 0) {
            alert("Please select at least one required document.");
            return; // Stop form submission
        }
        console.log(newVisa)
    }

  return (
    <div className="">
      {/* Add Visa Form */}
      <div className="mx-auto w-full ">
        <form onSubmit={handleAddVisaSubmit} action="" className="space-y-4">
          <div className="flex space-x-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>
              <input
                type="text"
                name="countryName"
                placeholder="Type here"
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
                placeholder="Image URL"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>
          <div className="flex space-x-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Visa Type</span>
              </div>
              <select
                name="visaType"
                className="select select-bordered"
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
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>
          <div className="flex space-x-8">
            <div className="flex-col flex justify-between">
              <label htmlFor="">Required Document</label>
              <div required>
                <label className="label cursor-pointer">
                  <span className="label-text">Valid Passport</span>
                  <input type="checkbox" value="Valid Passport" className="checkbox" />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Visa Application Form</span>
                  <input type="checkbox" value="Visa Application Form" className="checkbox" />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Passport Size Photo</span>
                  <input type="checkbox" value="Passport Size Photo" className="checkbox" />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">Bank Statements</span>
                  <input type="checkbox" value="Bank Statement" className="checkbox" />
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  name="description"
                  className="textarea textarea-bordered h-32"
                  placeholder="Type Visa Description"
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <div className="flex space-x-8">
          <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Age Restriction ( Up to Years )</span>
              </div>
              <input
                type="number"
                name="ageRestriction"
                placeholder="Type Number Here"
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
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>
          <div className="flex space-x-8">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Months (upto months)</span>
              </div>
              <input
                type="number"
                name="validity"
                placeholder="Type lengths in number"
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
                required
              >
                <option value="" className="select-disabled">Select Application Method</option>
                <option>Online</option>
                <option>In Person</option>
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-4">Add Visa</button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
