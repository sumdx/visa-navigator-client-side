import React, { useEffect, useState } from 'react';

const AllVisa = () => {
    const [visas, updateVisas] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/visas',{

            method : 'GET',
            headers : {
                'content-type' : 'application/json'
            },
    
        })
        .then(res => res.json())
        .then(data =>{
            updateVisas(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            {
                 visas.length>0 &&
                 visas.map(visa =>{
                     return <ol>
                         <li>{visa.countryName}</li>
                         <li>{visa.fees}</li>
                         <li>{visa._id}</li>
                        
                     </ol>
                 })
            }
        </div>
    );
};

export default AllVisa;