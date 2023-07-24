import React, { useEffect, useState } from 'react';

import SeekerItem from './SeekerItem';

const Seeker = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('seeker.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <div className="text-center mb-7">
                <h3 className="text-5xl font-bold text-orange-400">Experienced Jobs</h3>
            </div>
            <div className="">
            {
               data?.map(dt=><SeekerItem key={dt.id} dt={dt}></SeekerItem>)
            }
            </div>
            
        </div>
    )
};

export default Seeker;