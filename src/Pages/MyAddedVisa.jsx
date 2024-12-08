import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import MyVisaCard from "../Components/MyVisaCard";

const MyAddedVisa = () => {
  const [myVisas, updateMyVisas] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:3000/myvisas?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        updateMyVisas(data);
      });
  }, []);


  const deleteHandle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              updateMyVisas(myVisas.filter((visa) => visa._id != id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">My Added Visas</h1>
          <p className="text-lg">
            All visa is added by you will show here
          </p>
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <div className="flex justify-between items-center px-4">
          <h1 className="my-4 font-semibold text-xl">Visa Added by me :</h1>
          <h1  className="my-4 font-semibold text-xl" >Total {myVisas.length}</h1>
        </div>
        <div className="space-y-4 container mx-auto">
          {myVisas.map((visa) => (
            <MyVisaCard key={visa._id} visa={visa} deleteHandle={deleteHandle}></MyVisaCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisa;
