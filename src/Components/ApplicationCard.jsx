import React from "react";

const ApplicationCard = ({ visa }) => {
  const {
    _id,
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
    email,
  } = visa;

  const deleteHandle = () => {};
  console.log(visa);
  return (
    <div>
      <div className="bg-white shadow-xl rounded-lg flex p-4 gap-6 justify-between">
        <div className="flex justify-center items-center gap-8">
          <div className="w-28">
            <img className="h-20 object-fill" src={countryImage} alt="" />
          </div>
          <div>
            <h1 className="font-bold font-xl">{countryName}</h1>
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
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => deleteHandle(visa._id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
