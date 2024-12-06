import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyAddedVisa = () => {
    const [myVisas, updateMyVisas] = useState([]);
    const email ="sumdas44@biraz.com"
    useEffect(()=>{
        fetch(`http://localhost:3000/myvisas?email=${encodeURIComponent(email)}`,{

            method : 'GET',
            headers : {
                'content-type' : 'application/json'
            },
    
        })
        .then(res => res.json())
        .then(data =>{
            updateMyVisas(data)
        })
    },[])

    const deleteHandle= (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            fetch(`http://localhost:3000/visas/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            }
          });
    }
    

    return (
        <div>
            {
                myVisas.length>0 &&
                myVisas.map(visa =>{
                    return <ol>
                        <li>{visa.countryName}</li>
                        <li>{visa.fees}</li>
                        <li>
                            <button className='btn'  onClick={()=>deleteHandle(visa._id)}>Delete</button>
                        </li>
                    </ol>
                })
            }
        </div>
    );
};

export default MyAddedVisa;