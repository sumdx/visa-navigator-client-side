import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from '../Components/VisaCard';

const AllVisa = () => {
    const newVisas = useLoaderData();
    const [visas, updateVisas] = useState(newVisas);
   
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
        <div className='grid grid-cols-4 container gap-10 mt-10 mx-auto'>
            {
                 visas.length>0 &&
                 visas.map(visa => <VisaCard visa ={visa}></VisaCard>)
            }
        </div>
    );
};

export default AllVisa;